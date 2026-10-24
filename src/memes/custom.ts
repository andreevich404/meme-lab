import { ref } from 'vue'
import type { MemeDef } from '../types'

export const CUSTOM_ID = 'custom'

/** Загруженная пользователем картинка (живёт только до перезагрузки страницы). */
export const customMeme = ref<MemeDef | null>(null)

function readSize(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = () => reject(new Error('bad image'))
    img.src = url
  })
}

export async function setCustomImage(file: File): Promise<void> {
  const url = URL.createObjectURL(file)
  try {
    const { width, height } = await readSize(url)
    const fs = Math.max(16, Math.round(width / 10))
    const base = { w: 92, fontSize: fs, color: '#ffffff', stroke: '#000000', align: 'center' as const, rot: 0 }
    const old = customMeme.value
    customMeme.value = {
      id: CUSTOM_ID,
      title: 'Свой мем',
      description: 'Твоя картинка и две подписи: сверху и снизу.',
      src: url,
      width,
      height,
      fields: [
        { ...base, id: 'top', label: 'Верх', placeholder: 'Верхняя подпись', defaultText: 'ВЕРХНЯЯ ПОДПИСЬ', x: 50, y: 9 },
        { ...base, id: 'bottom', label: 'Низ', placeholder: 'Нижняя подпись', defaultText: 'НИЖНЯЯ ПОДПИСЬ', x: 50, y: 91 },
      ],
    }
    if (old) URL.revokeObjectURL(old.src)
  } catch (e) {
    URL.revokeObjectURL(url)
    throw e
  }
}
