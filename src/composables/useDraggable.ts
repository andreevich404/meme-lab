import type { Ref } from 'vue'

/**
 * Перетаскивание элемента внутри контейнера через pointer events (мышь + touch).
 * Возвращает обработчик pointerdown; позиция передаётся в onMove в процентах контейнера.
 */
export function useDraggable(
  container: Ref<HTMLElement | null>,
  onMove: (xPct: number, yPct: number) => void,
  onStart?: () => void,
) {
  function start(e: PointerEvent) {
    const box = container.value
    const target = e.currentTarget as HTMLElement | null
    if (!box || !target) return
    if (e.pointerType === 'mouse' && e.button !== 0) return
    onStart?.()
    const rect = box.getBoundingClientRect()
    const tRect = target.getBoundingClientRect()
    // смещение точки касания относительно центра блока
    const offX = e.clientX - (tRect.left + tRect.width / 2)
    const offY = e.clientY - (tRect.top + tRect.height / 2)
    target.setPointerCapture(e.pointerId)

    const move = (ev: PointerEvent) => {
      const x = ((ev.clientX - offX - rect.left) / rect.width) * 100
      const y = ((ev.clientY - offY - rect.top) / rect.height) * 100
      onMove(Math.min(100, Math.max(0, x)), Math.min(100, Math.max(0, y)))
    }
    const end = (ev: PointerEvent) => {
      target.removeEventListener('pointermove', move)
      target.removeEventListener('pointerup', end)
      target.removeEventListener('pointercancel', end)
      if (target.hasPointerCapture(ev.pointerId)) target.releasePointerCapture(ev.pointerId)
    }
    target.addEventListener('pointermove', move)
    target.addEventListener('pointerup', end)
    target.addEventListener('pointercancel', end)
    e.preventDefault()
  }
  return { start }
}
