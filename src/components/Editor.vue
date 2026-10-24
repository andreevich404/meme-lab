<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { EditorState, MemeDef, TextFieldDef, TextItem } from '../types'
import DraggableText from './DraggableText.vue'
import ControlsPanel from './ControlsPanel.vue'
import { fontCss } from '../composables/fonts'
import { useExport } from '../composables/useExport'

const props = defineProps<{ meme: MemeDef }>()
const persist = props.meme.id !== 'custom'
const storageKey = `meme-lab:v2:${props.meme.id}`

function fromField(d: TextFieldDef): TextItem {
  return {
    id: d.id,
    text: d.defaultText,
    x: d.x,
    y: d.y,
    w: d.w,
    rot: d.rot,
    fontSize: d.fontSize,
    color: d.color,
    stroke: d.stroke,
    align: d.align,
    font: d.font ?? 'oswald',
  }
}

function defaults(): EditorState {
  return { items: props.meme.fields.map(fromField) }
}

function load(): EditorState {
  if (!persist) return defaults()
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw) {
      const s = JSON.parse(raw) as EditorState
      if (Array.isArray(s.items)) return s
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
    if (!persist) return
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

const img = ref<HTMLImageElement | null>(null)
/** Ждём картинку и шрифты, иначе в PNG попадёт пустой кадр или запасной шрифт. */
async function waitAssets() {
  const el = img.value
  if (el) {
    if (!el.complete) await new Promise<void>((r) => { el.onload = () => r(); el.onerror = () => r() })
    try { await el.decode() } catch { /* уже декодирована или недоступна */ }
  }
  await Promise.all(
    state.value.items.map((it) => document.fonts.load(`700 ${Math.round(it.fontSize)}px ${fontCss(it.font)}`, it.text || ' ').catch(() => [])),
  )
  await document.fonts.ready
}

const { busy, message, canCopy, download, copy } = useExport(stage, async () => {
  // убираем рамку выделения из кадра
  const keep = selectedId.value
  selectedId.value = null
  await nextTick()
  restore = keep
  await waitAssets()
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
    w: 80,
    rot: 0,
    fontSize: base?.fontSize ?? Math.round(props.meme.width / 15),
    color: base?.color ?? '#ffffff',
    stroke: base ? base.stroke : '#000000',
    align: 'center',
    font: base?.font ?? 'oswald',
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
    <h1 class="mb-1 text-2xl font-black sm:text-4xl">{{ meme.title }}</h1>
    <p class="mb-6 font-medium text-[var(--muted)]">{{ meme.description }}</p>

    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-start">
      <div class="nb-card flex justify-center bg-[var(--accent)] p-3 sm:p-5 lg:sticky lg:top-20">
        <div class="w-full border-[3px] border-[var(--line)] bg-white" :style="{ maxWidth: `min(${Math.min(meme.width * 2, 720)}px, calc(78vh * ${meme.width / meme.height}))` }">
        <div
          ref="stage"
          class="relative w-full select-none overflow-hidden bg-white"
          :style="{ aspectRatio: `${meme.width} / ${meme.height}` }"
          data-testid="stage"
          @pointerdown.self="selectedId = null"
        >
          <img ref="img" :src="meme.src" :alt="meme.title" :width="meme.width" :height="meme.height" draggable="false" class="pointer-events-none block h-full w-full select-none" />
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
      </div>

      <ControlsPanel
        :items="state.items"
        :selected-id="selectedId"
        :busy="busy"
        :can-copy="canCopy"
        :message="message"
        @select="selectedId = $event"
        @update="patch"
        @add="add"
        @remove="remove"
        @reset="reset"
        @download="run(() => download(`meme-${meme.id}`))"
        @copy="run(() => copy())"
      />
    </div>
  </section>
</template>
