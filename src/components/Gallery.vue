<script setup lang="ts">
import { ref } from 'vue'
import MemeCard from './MemeCard.vue'
import { memes } from '../memes'
import { CUSTOM_ID, setCustomImage } from '../memes/custom'

const fileInput = ref<HTMLInputElement | null>(null)
const error = ref('')

async function onFile(e: Event) {
  const el = e.target as HTMLInputElement
  const file = el.files?.[0]
  el.value = ''
  if (!file) return
  error.value = ''
  if (!file.type.startsWith('image/')) {
    error.value = 'Выбери файл-картинку (PNG, JPG, WebP, GIF).'
    return
  }
  try {
    await setCustomImage(file)
    window.location.hash = `#/meme/${CUSTOM_ID}`
  } catch {
    error.value = 'Не удалось прочитать картинку. Попробуй другой файл.'
  }
}
</script>

<template>
  <section aria-labelledby="gallery-title">
    <div class="mb-8 sm:mb-10">
      <span class="sticker">10 шаблонов + твой</span>
      <h1 id="gallery-title" class="hero-title mt-3">
        Делай мемы<br />
        <span class="inline-block rotate-[-1.5deg] border-[3px] border-[var(--line)] bg-[var(--accent)] px-2 text-[#141414] shadow-[var(--shadow)]">быстрее</span>
        препода
      </h1>
      <p class="mt-5 max-w-xl text-base font-medium text-[var(--muted)] sm:text-lg">
        Выбери шаблон, перетащи подписи, поменяй шрифт и скачай PNG.
      </p>
    </div>

    <p v-if="error" class="nb-card mb-4 bg-[#ff5d73] p-3 font-bold text-[#141414]" role="alert">{{ error }}</p>
    <input ref="fileInput" type="file" accept="image/*" class="sr-only" tabindex="-1" aria-hidden="true" data-testid="custom-file" @change="onFile" />

    <ul class="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="m in memes" :key="m.id"><MemeCard :meme="m" /></li>
      <li>
        <button
          type="button"
          data-testid="custom-card"
          class="nb-card nb-card-pop meme-card flex h-full min-h-[16rem] w-full cursor-pointer flex-col items-center justify-center gap-3 border-dashed p-6 text-center"
          aria-label="Свой мем: загрузить картинку"
          @click="fileInput?.click()"
        >
          <span class="font-display text-6xl font-black leading-none" aria-hidden="true">+</span>
          <span class="font-display text-lg font-extrabold">Свой мем</span>
          <span class="text-sm font-semibold">Загрузи картинку и добавь две подписи: сверху и снизу</span>
        </button>
      </li>
    </ul>
  </section>
</template>
