import { ref, type Ref } from 'vue'
import { toBlob, toPng } from 'html-to-image'

/** Экспорт DOM-узла в PNG: скачивание и копирование в буфер. */
export function useExport(node: Ref<HTMLElement | null>, prepare?: () => Promise<void>) {
  const busy = ref(false)
  const message = ref('')
  const canCopy =
    typeof navigator !== 'undefined' && !!navigator.clipboard && typeof ClipboardItem !== 'undefined'

  async function wrap(fn: () => Promise<void>, ok: string) {
    if (!node.value || busy.value) return
    busy.value = true
    message.value = ''
    try {
      await prepare?.()
      await fn()
      message.value = ok
    } catch {
      message.value = 'Не удалось выполнить экспорт'
    } finally {
      busy.value = false
    }
  }

  const opts = { pixelRatio: 2, cacheBust: false }

  function download(filename: string) {
    return wrap(async () => {
      const url = await toPng(node.value!, opts)
      const a = document.createElement('a')
      a.href = url
      a.download = `${filename}.png`
      document.body.appendChild(a)
      a.click()
      a.remove()
    }, 'PNG сохранён')
  }

  function copy() {
    return wrap(async () => {
      const blob = await toBlob(node.value!, opts)
      if (!blob) throw new Error('empty')
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
    }, 'Скопировано в буфер')
  }

  return { busy, message, canCopy, download, copy }
}
