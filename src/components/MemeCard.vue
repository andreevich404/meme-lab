<script setup lang="ts">
import type { MemeDef } from '../types'

defineProps<{ meme: MemeDef }>()
</script>

<template>
  <a
    :href="`#/meme/${meme.id}`"
    :aria-label="`Редактировать мем: ${meme.title}`"
    class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900"
  >
    <div class="flex aspect-square items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800">
      <div class="w-full" :style="{ aspectRatio: `${meme.width} / ${meme.height}`, maxHeight: '100%' }">
        <component :is="meme.component" :bg="meme.defaultBg" />
      </div>
    </div>
    <div class="p-4">
      <h2 class="font-semibold group-hover:text-indigo-500">{{ meme.title }}</h2>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ meme.description }}</p>
    </div>
  </a>
</template>
