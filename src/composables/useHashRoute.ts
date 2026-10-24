import { onMounted, onBeforeUnmount, ref } from 'vue'

/** Минимальный hash-роутинг: "#/meme/<id>" -> id, иначе null (галерея). */
export function parseHash(hash: string): string | null {
  const m = hash.match(/^#\/meme\/([^/?#]+)/)
  return m ? decodeURIComponent(m[1]) : null
}

export function useHashRoute() {
  const memeId = ref<string | null>(parseHash(window.location.hash))
  const onChange = () => {
    memeId.value = parseHash(window.location.hash)
  }
  onMounted(() => window.addEventListener('hashchange', onChange))
  onBeforeUnmount(() => window.removeEventListener('hashchange', onChange))
  return { memeId }
}
