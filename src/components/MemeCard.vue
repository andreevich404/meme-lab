<script setup lang="ts">
import type { MemeDef } from '../types'

defineProps<{ meme: MemeDef }>()
</script>

<template>
  <a
    :href="`#/meme/${meme.id}`"
    :aria-label="`Редактировать мем: ${meme.title}`"
    class="nb-card meme-card group flex h-full flex-col overflow-hidden"
  >
    <div class="aspect-square overflow-hidden border-b-[3px] border-[var(--line)] bg-[var(--bg)]">
      <img :src="meme.src" :alt="meme.title" :width="meme.width" :height="meme.height" loading="lazy" draggable="false" class="h-full w-full object-cover" />
    </div>
    <div class="p-4">
      <h2 class="font-display text-base font-extrabold leading-tight">{{ meme.title }}</h2>
      <p class="mt-1.5 text-sm font-medium text-[var(--muted)]">{{ meme.description }}</p>
    </div>
  </a>
</template>
