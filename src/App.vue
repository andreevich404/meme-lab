<script setup lang="ts">
import { computed } from 'vue'
import Gallery from './components/Gallery.vue'
import Editor from './components/Editor.vue'
import { getMeme } from './memes'
import { useHashRoute } from './composables/useHashRoute'

const { memeId } = useHashRoute()
const meme = computed(() => (memeId.value ? getMeme(memeId.value) : undefined))
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-10 border-b-[3px] border-[var(--line)] bg-[var(--pop)] text-[#141414]">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <a href="#/" class="font-display text-lg font-black tracking-tight sm:text-xl" aria-label="Мем-лаб: на главную">
          МЕМ<span class="mx-0.5 inline-block rotate-[-4deg] rounded-md border-[3px] border-[#141414] bg-[#141414] px-1.5 text-[var(--pop)]">ЛАБ</span>
        </a>
        <nav aria-label="Основная навигация">
          <a v-if="meme" href="#/" class="nb-btn nb-btn-accent" style="color:#141414">&larr; Все мемы</a>
          <span v-else class="hidden text-sm font-bold sm:inline">Выбери мем и отредактируй</span>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:py-8">
      <Editor v-if="meme" :key="meme.id + meme.src" :meme="meme" />
      <template v-else>
        <p v-if="memeId" class="nb-card nb-card-pop mb-5 p-3 font-bold" role="alert">
          {{ memeId === 'custom' ? 'Свой мем нужно загрузить заново: открой «Свой мем» в галерее.' : `Мем «${memeId}» не найден. Выбери другой из галереи.` }}
        </p>
        <Gallery />
      </template>
    </main>

    <footer class="border-t-[3px] border-[var(--line)] bg-[var(--card)] py-4 text-center text-sm font-semibold">
      Лабораторная работа &middot; Мем-лаб
    </footer>
  </div>
</template>
