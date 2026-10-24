<script setup lang="ts">
import MemeCard from './MemeCard.vue'
import { memes } from '../memes'
</script>

<template>
  <section aria-labelledby="gallery-title">
    <h1 id="gallery-title" class="mb-1 text-2xl font-bold sm:text-3xl">Галерея мемов</h1>
    <p class="mb-6 text-slate-600 dark:text-slate-400">Нажми на карточку, чтобы открыть редактор.</p>
    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="m in memes" :key="m.id"><MemeCard :meme="m" /></li>
    </ul>
  </section>
</template>
