<script setup lang="ts">
import { computed, toRef } from 'vue'
import type { TextItem } from '../types'
import { fontCss } from '../composables/fonts'
import { useDraggable } from '../composables/useDraggable'

const props = defineProps<{
  item: TextItem
  /** px на единицу viewBox */
  scale: number
  selected: boolean
  stage: HTMLElement | null
}>()
const emit = defineEmits<{
  select: [id: string]
  move: [id: string, x: number, y: number]
}>()

const { start } = useDraggable(
  toRef(props, 'stage'),
  (x, y) => emit('move', props.item.id, x, y),
  () => emit('select', props.item.id),
)

const style = computed(() => {
  const size = props.item.fontSize * props.scale
  return {
    left: `${props.item.x}%`,
    top: `${props.item.y}%`,
    transform: 'translate(-50%, -50%)',
    fontSize: `${size}px`,
    lineHeight: 1.1,
    color: props.item.color,
    fontFamily: fontCss(props.item.font),
    fontWeight: 800,
    textAlign: props.item.align,
    WebkitTextStroke: `${Math.max(1, size * 0.14)}px ${props.item.stroke}`,
    paintOrder: 'stroke fill',
    textShadow: 'none',
  } as Record<string, string | number>
})

function onKey(e: KeyboardEvent) {
  const step = e.shiftKey ? 5 : 1
  const d: Record<string, [number, number]> = {
    ArrowLeft: [-step, 0],
    ArrowRight: [step, 0],
    ArrowUp: [0, -step],
    ArrowDown: [0, step],
  }
  const v = d[e.key]
  if (!v) return
  e.preventDefault()
  emit('move', props.item.id, Math.min(100, Math.max(0, props.item.x + v[0])), Math.min(100, Math.max(0, props.item.y + v[1])))
}
</script>

<template>
  <div
    class="absolute max-w-[96%] cursor-grab select-none whitespace-pre-wrap break-words active:cursor-grabbing focus:outline-none"
    :class="selected ? 'outline-2 outline-dashed outline-offset-4 outline-indigo-400' : ''"
    :style="{ ...style, touchAction: 'none', width: 'max-content' }"
    tabindex="0"
    role="button"
    :aria-label="`Подпись: ${item.text || 'пустая'}. Перетаскивай или двигай стрелками`"
    :data-testid="`caption-${item.id}`"
    @pointerdown="start"
    @keydown="onKey"
    @focus="emit('select', item.id)"
  >{{ item.text || ' ' }}</div>
</template>
