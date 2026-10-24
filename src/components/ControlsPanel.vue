<script setup lang="ts">
import { computed } from 'vue'
import type { TextAlign, TextItem } from '../types'
import { fonts } from '../composables/fonts'

const props = defineProps<{
  items: TextItem[]
  selectedId: string | null
  bg: string
  palette: string[]
  busy: boolean
  canCopy: boolean
  message: string
}>()
const emit = defineEmits<{
  select: [id: string]
  update: [patch: Partial<TextItem>]
  'update:bg': [value: string]
  add: []
  remove: []
  reset: []
  download: []
  copy: []
}>()

const selected = computed(() => props.items.find((i) => i.id === props.selectedId) ?? null)
const aligns: { v: TextAlign; label: string }[] = [
  { v: 'left', label: 'Слева' },
  { v: 'center', label: 'По центру' },
  { v: 'right', label: 'Справа' },
]

const btn =
  'rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-50'
const field =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800'
const lbl = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'

function onInput(key: 'text' | 'fontSize' | 'color' | 'stroke' | 'font', e: Event) {
  const el = e.target as HTMLInputElement
  emit('update', { [key]: key === 'fontSize' ? Number(el.value) : el.value })
}
</script>

<template>
  <div class="space-y-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <section aria-labelledby="captions-h">
      <h2 id="captions-h" class="mb-2 text-sm font-bold">Подписи</h2>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(it, i) in items"
          :key="it.id"
          type="button"
          :class="[btn, it.id === selectedId ? 'bg-indigo-500 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700']"
          :aria-pressed="it.id === selectedId"
          :aria-label="`Выбрать подпись ${i + 1}`"
          @click="emit('select', it.id)"
        >
          {{ i + 1 }}. {{ (it.text || 'пусто').slice(0, 14) }}
        </button>
      </div>
      <div class="mt-3 flex gap-2">
        <button type="button" data-testid="add-caption" aria-label="Добавить подпись" :class="[btn, 'bg-emerald-500 text-white hover:bg-emerald-600']" @click="emit('add')">+ Добавить подпись</button>
        <button type="button" data-testid="remove-caption" aria-label="Удалить подпись" :disabled="!selected" :class="[btn, 'bg-rose-500 text-white hover:bg-rose-600']" @click="emit('remove')">Удалить</button>
      </div>
    </section>

    <section v-if="selected" aria-labelledby="edit-h" class="space-y-3">
      <h2 id="edit-h" class="text-sm font-bold">Выбранная подпись</h2>
      <div>
        <label :class="lbl" for="cap-text">Текст</label>
        <textarea id="cap-text" rows="2" :class="field" :value="selected.text" data-testid="caption-text" @input="onInput('text', $event)" />
      </div>
      <div>
        <label :class="lbl" for="cap-size">Размер: {{ selected.fontSize }}</label>
        <input id="cap-size" type="range" min="12" max="110" step="1" class="w-full accent-indigo-500" :value="selected.fontSize" @input="onInput('fontSize', $event)" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label :class="lbl" for="cap-color">Цвет текста</label>
          <input id="cap-color" type="color" class="h-10 w-full cursor-pointer rounded-lg border border-slate-300 bg-transparent dark:border-slate-700" :value="selected.color" @input="onInput('color', $event)" />
        </div>
        <div>
          <label :class="lbl" for="cap-stroke">Цвет обводки</label>
          <input id="cap-stroke" type="color" class="h-10 w-full cursor-pointer rounded-lg border border-slate-300 bg-transparent dark:border-slate-700" :value="selected.stroke" @input="onInput('stroke', $event)" />
        </div>
      </div>
      <div>
        <label :class="lbl" for="cap-font">Шрифт</label>
        <select id="cap-font" :class="field" :value="selected.font" @change="onInput('font', $event)">
          <option v-for="f in fonts" :key="f.id" :value="f.id">{{ f.label }}</option>
        </select>
      </div>
      <div>
        <span :class="lbl" id="align-l">Выравнивание</span>
        <div class="flex gap-2" role="group" aria-labelledby="align-l">
          <button
            v-for="a in aligns"
            :key="a.v"
            type="button"
            :aria-pressed="selected.align === a.v"
            :class="[btn, 'flex-1', selected.align === a.v ? 'bg-indigo-500 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700']"
            @click="emit('update', { align: a.v })"
          >{{ a.label }}</button>
        </div>
      </div>
    </section>
    <p v-else class="text-sm text-slate-500">Выбери подпись на картинке или в списке выше.</p>

    <section aria-labelledby="bg-h">
      <h2 id="bg-h" class="mb-2 text-sm font-bold">Фон сцены</h2>
      <div class="flex flex-wrap items-center gap-2">
        <button
          v-for="c in palette"
          :key="c"
          type="button"
          class="h-9 w-9 rounded-full border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          :class="c === bg ? 'border-indigo-500 scale-110' : 'border-slate-300 dark:border-slate-600'"
          :style="{ background: c }"
          :aria-label="`Фон ${c}`"
          :aria-pressed="c === bg"
          @click="emit('update:bg', c)"
        />
        <input type="color" aria-label="Свой цвет фона" class="h-9 w-12 cursor-pointer rounded-lg border border-slate-300 bg-transparent dark:border-slate-700" :value="bg" @input="emit('update:bg', ($event.target as HTMLInputElement).value)" />
      </div>
    </section>

    <section class="flex flex-wrap gap-2 border-t border-slate-200 pt-4 dark:border-slate-800" aria-label="Действия">
      <button type="button" data-testid="download" aria-label="Скачать PNG" :disabled="busy" :class="[btn, 'bg-indigo-500 text-white hover:bg-indigo-600']" @click="emit('download')">Скачать PNG</button>
      <button v-if="canCopy" type="button" data-testid="copy" aria-label="Копировать в буфер обмена" :disabled="busy" :class="[btn, 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700']" @click="emit('copy')">Копировать в буфер</button>
      <button type="button" data-testid="reset" aria-label="Сбросить изменения" :class="[btn, 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700']" @click="emit('reset')">Сбросить</button>
      <p class="w-full text-sm text-slate-500" role="status" aria-live="polite">{{ busy ? 'Готовлю изображение...' : message }}</p>
    </section>
  </div>
</template>
