<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { EditorState, MemeDef, TextFieldDef, TextItem } from '../types'
import DraggableText from './DraggableText.vue'
import ControlsPanel from './ControlsPanel.vue'
import { useExport } from '../composables/useExport'

const props = defineProps<{ meme: MemeDef }>()
const storageKey = `meme-lab:${props.meme.id}`

function fromField(d: TextFieldDef): TextItem {
  return {
    id: d.id,
    text: d.defaultText,
    x: d.x,
    y: d.y,
    fontSize: d.fontSize,
    color: d.color,
    stroke: d.stroke,
    align: d.align,
    font: d.font ?? 'impact',
  }
}

function defaults(): EditorState {
  return { items: props.meme.fields.map(fromField), bg: props.meme.defaultBg }
}

function load(): EditorState {
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw) {
      const s = JSON.parse(raw) as EditorState
      if (Array.isArray(s.items) && typeof s.bg === 'string') return s
    }
  } catch {
    /* игнорируем битые данные и недоступный localStorage */
  }
  return defaults()
}

const state = ref<EditorState>(load())
const selectedId = ref<string | null>(state.value.items[0]?.id ?? null)

watch(
  state,
  (s) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(s))
    } catch {
      /* квота или приватный режим */
    }
  },
  { deep: true },
)

const stage = ref<HTMLElement | null>(null)
const scale = ref(1)
let ro: ResizeObserver | null = null
onMounted(() => {
  if (!stage.value) return
  const upd = () => {
    if (stage.value) scale.value = stage.value.clientWidth / props.meme.width
  }
  upd()
  ro = new ResizeObserver(upd)
  ro.observe(stage.value)
})
onBeforeUnmount(() => ro?.disconnect())

const { busy, message, canCopy, download, copy } = useExport(stage, async () => {
  // убираем рамку выделения из кадра
  const keep = selectedId.value
  selectedId.value = null
  await nextTick()
  restore = keep
})
let restore: string | null = null
async function run(fn: () => Promise<void>) {
  await fn()
  if (restore) selectedId.value = restore
  restore = null
}

function patch(p: Partial<TextItem>) {
  const it = state.value.items.find((i) => i.id === selectedId.value)
  if (it) Object.assign(it, p)
}
function move(id: string, x: number, y: number) {
  const it = state.value.items.find((i) => i.id === id)
  if (it) {
    it.x = Math.round(x * 10) / 10
    it.y = Math.round(y * 10) / 10
  }
}
function add() {
  const base = state.value.items.find((i) => i.id === selectedId.value) ?? state.value.items[0]
  const id = `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`
  state.value.items.push({
    id,
    text: 'Новая подпись',
    x: 50,
    y: 50,
    fontSize: base?.fontSize ?? 40,
    color: base?.color ?? '#ffffff',
    stroke: base?.stroke ?? '#000000',
    align: 'center',
    font: base?.font ?? 'impact',
  })
  selectedId.value = id
}
function remove() {
  const i = state.value.items.findIndex((x) => x.id === selectedId.value)
  if (i < 0) return
  state.value.items.splice(i, 1)
  selectedId.value = state.value.items[Math.max(0, i - 1)]?.id ?? null
}
function reset() {
  state.value = defaults()
  selectedId.value = state.value.items[0]?.id ?? null
}
</script>

<template>
  <section :aria-label="`Редактор: ${meme.title}`">
    <h1 class="mb-1 text-2xl font-bold sm:text-3xl">{{ meme.title }}</h1>
    <p class="mb-5 text-slate-600 dark:text-slate-400">{{ meme.description }}</p>

    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
      <div class="flex justify-center rounded-2xl bg-slate-200/60 p-3 dark:bg-slate-900">
        <div
          ref="stage"
          class="relative w-full overflow-hidden rounded-lg shadow-lg"
          :style="{ aspectRatio: `${meme.width} / ${meme.height}`, maxWidth: `${meme.width * 1.4}px` }"
          data-testid="stage"
          @pointerdown.self="selectedId = null"
        >
          <component :is="meme.component" :bg="state.bg" class="pointer-events-none" />
          <DraggableText
            v-for="it in state.items"
            :key="it.id"
            :item="it"
            :scale="scale"
            :selected="it.id === selectedId"
            :stage="stage"
            @select="selectedId = $event"
            @move="move"
          />
        </div>
      </div>

      <ControlsPanel
        :items="state.items"
        :selected-id="selectedId"
        :bg="state.bg"
        :palette="meme.palette"
        :busy="busy"
        :can-copy="canCopy"
        :message="message"
        @select="selectedId = $event"
        @update="patch"
        @update:bg="state.bg = $event"
        @add="add"
        @remove="remove"
        @reset="reset"
        @download="run(() => download(`meme-${meme.id}`))"
        @copy="run(() => copy())"
      />
    </div>
  </section>
</template>
