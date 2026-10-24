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
  <div class="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <header class="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#/"
          class="rounded-md text-xl font-extrabold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Мем-лаб: на главную"
        >
          Мем-<span class="text-indigo-500">лаб</span>
        </a>
        <nav aria-label="Основная навигация">
          <a
            v-if="meme"
            href="#/"
            class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            &larr; Все мемы
          </a>
          <span v-else class="text-sm text-slate-500 dark:text-slate-400">Выбери мем и отредактируй</span>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
      <Editor v-if="meme" :key="meme.id" :meme="meme" />
      <template v-else>
        <p v-if="memeId" class="mb-4 rounded-lg bg-amber-100 p-3 text-amber-900" role="alert">
          Мем «{{ memeId }}» не найден. Выбери другой из галереи.
        </p>
        <Gallery />
      </template>
    </main>

    <footer class="border-t border-slate-200 py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      Лабораторная работа &middot; Мем-лаб
    </footer>
  </div>
</template>
