<script setup lang="ts">
import { computed } from 'vue'
import type { TextAlign, TextItem } from '../types'
import { fonts } from '../composables/fonts'

const props = defineProps<{
  items: TextItem[]
  selectedId: string | null
  busy: boolean
  canCopy: boolean
  message: string
}>()
const emit = defineEmits<{
  select: [id: string]
  update: [patch: Partial<TextItem>]
  add: []
  remove: []
  reset: []
  download: []
  copy: []
}>()

const selected = computed(() => props.items.find((i) => i.id === props.selectedId) ?? null)
const aligns: { v: TextAlign; label: string }[] = [
  { v: 'left', label: 'Слева' },
  { v: 'center', label: 'Центр' },
  { v: 'right', label: 'Справа' },
]

function onInput(key: 'text' | 'fontSize' | 'color' | 'font' | 'w' | 'rot', e: Event) {
  const el = e.target as HTMLInputElement
  emit('update', { [key]: ['fontSize', 'w', 'rot'].includes(key) ? Number(el.value) : el.value })
}
const strokeOn = computed(() => !!selected.value?.stroke)
</script>

<template>
  <div class="nb-card space-y-4 p-4">
    <section class="nb-group" aria-labelledby="captions-h">
      <h2 id="captions-h">Подписи</h2>
      <div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(it, i) in items"
            :key="it.id"
            type="button"
            class="nb-btn max-w-full"
            :class="it.id === selectedId ? 'nb-btn-accent' : ''"
            :aria-pressed="it.id === selectedId"
            :aria-label="`Выбрать подпись ${i + 1}`"
            @click="emit('select', it.id)"
          ><span class="truncate">{{ i + 1 }}. {{ (it.text || 'пусто').slice(0, 14) }}</span></button>
        </div>
        <div class="mt-3 flex gap-2">
          <button type="button" data-testid="add-caption" aria-label="Добавить подпись" class="nb-btn nb-btn-pop" @click="emit('add')">+ Добавить</button>
          <button type="button" data-testid="remove-caption" aria-label="Удалить подпись" :disabled="!selected" class="nb-btn nb-btn-danger" @click="emit('remove')">Удалить</button>
        </div>
      </div>
    </section>

    <template v-if="selected">
      <section class="nb-group" aria-labelledby="text-h">
        <h2 id="text-h">Текст</h2>
        <div class="space-y-3">
          <div>
            <label class="nb-label" for="cap-text">Текст подписи</label>
            <textarea id="cap-text" rows="2" class="nb-input" :value="selected.text" data-testid="caption-text" @input="onInput('text', $event)" />
          </div>
          <div>
            <label class="nb-label" for="cap-font">Шрифт</label>
            <select id="cap-font" class="nb-input" :value="selected.font" @change="onInput('font', $event)">
              <option v-for="f in fonts" :key="f.id" :value="f.id">{{ f.label }}</option>
            </select>
          </div>
          <div>
            <span id="align-l" class="nb-label">Выравнивание</span>
            <div class="seg" role="group" aria-labelledby="align-l">
              <button v-for="a in aligns" :key="a.v" type="button" :aria-pressed="selected.align === a.v" @click="emit('update', { align: a.v })">{{ a.label }}</button>
            </div>
          </div>
        </div>
      </section>

      <section class="nb-group" aria-labelledby="look-h">
        <h2 id="look-h">Вид</h2>
        <div class="space-y-3">
          <div>
            <label class="nb-label" for="cap-size">Размер: {{ selected.fontSize }}</label>
            <input id="cap-size" type="range" min="10" max="140" step="1" class="nb-range" :value="selected.fontSize" @input="onInput('fontSize', $event)" />
          </div>
          <div>
            <label class="nb-label" for="cap-w">Ширина блока: {{ selected.w }}%</label>
            <input id="cap-w" type="range" min="10" max="100" step="1" class="nb-range" :value="selected.w" @input="onInput('w', $event)" />
          </div>
          <div>
            <label class="nb-label" for="cap-rot">Поворот: {{ selected.rot }}°</label>
            <input id="cap-rot" type="range" min="-45" max="45" step="1" class="nb-range" :value="selected.rot" @input="onInput('rot', $event)" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="nb-label" for="cap-color">Цвет текста</label>
              <input id="cap-color" type="color" class="nb-input h-11 cursor-pointer p-1" :value="selected.color" @input="onInput('color', $event)" />
            </div>
            <div>
              <label class="nb-label" for="cap-stroke">Обводка</label>
              <input id="cap-stroke" type="color" class="nb-input h-11 cursor-pointer p-1 disabled:opacity-40" :disabled="!strokeOn" :value="selected.stroke || '#000000'" @input="emit('update', { stroke: ($event.target as HTMLInputElement).value })" />
            </div>
          </div>
          <div>
            <span id="stroke-l" class="nb-label">Контур текста</span>
            <div class="seg" role="group" aria-labelledby="stroke-l">
              <button type="button" :aria-pressed="strokeOn" data-testid="stroke-on" @click="emit('update', { stroke: selected.stroke || '#000000' })">С обводкой</button>
              <button type="button" :aria-pressed="!strokeOn" data-testid="stroke-off" @click="emit('update', { stroke: '' })">Без обводки</button>
            </div>
          </div>
        </div>
      </section>
    </template>
    <p v-else class="text-sm font-semibold text-[var(--muted)]">Выбери подпись на картинке или в списке выше.</p>

    <section class="nb-group" aria-label="Действия">
      <h2>Готово</h2>
      <div class="flex flex-wrap gap-2">
        <button type="button" data-testid="download" aria-label="Скачать PNG" :disabled="busy" class="nb-btn nb-btn-accent" @click="emit('download')">Скачать PNG</button>
        <button v-if="canCopy" type="button" data-testid="copy" aria-label="Копировать в буфер обмена" :disabled="busy" class="nb-btn" @click="emit('copy')">В буфер</button>
        <button type="button" data-testid="reset" aria-label="Сбросить изменения" class="nb-btn" @click="emit('reset')">Сбросить</button>
        <p class="w-full text-sm font-semibold text-[var(--muted)]" role="status" aria-live="polite">{{ busy ? 'Готовлю изображение...' : message }}</p>
      </div>
    </section>
  </div>
</template>
