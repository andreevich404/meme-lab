<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Две панели: отвергает и одобряет">
    <rect width="600" height="600" :fill="bg" />
    <rect x="270" y="0" width="330" height="300" fill="#ffffff" />
    <rect x="270" y="300" width="330" height="300" fill="#f4f4f4" />
    <path d="M0 300 H600" stroke="#333" stroke-width="4" />
    <!-- верхняя панель: отвергает -->
    <rect x="0" y="0" width="270" height="300" :fill="bg" />
    <circle cx="125" cy="150" r="62" fill="#c98e5f" stroke="#222" stroke-width="4" />
    <path d="M65 130 Q75 80 125 85 Q175 80 185 130 Q155 105 125 108 Q95 105 65 130 Z" fill="#1a1a1a" />
    <path d="M100 140 L115 140 M140 140 L155 140" stroke="#222" stroke-width="5" stroke-linecap="round" />
    <path d="M105 185 Q125 175 145 185" stroke="#222" stroke-width="5" fill="none" stroke-linecap="round" />
    <path d="M190 190 Q235 170 245 110 L225 95 Q215 140 175 160 Z" fill="#c98e5f" stroke="#222" stroke-width="4" />
    <path d="M30 300 Q30 235 125 225 Q220 235 220 300 Z" fill="#e8a32c" />
    <!-- нижняя панель: одобряет -->
    <rect x="0" y="300" width="270" height="300" :fill="bg" />
    <circle cx="125" cy="450" r="62" fill="#c98e5f" stroke="#222" stroke-width="4" />
    <path d="M65 430 Q75 380 125 385 Q175 380 185 430 Q155 405 125 408 Q95 405 65 430 Z" fill="#1a1a1a" />
    <path d="M100 440 L115 438 M140 438 L155 440" stroke="#222" stroke-width="5" stroke-linecap="round" />
    <path d="M100 478 Q125 500 150 478" stroke="#222" stroke-width="5" fill="none" stroke-linecap="round" />
    <path d="M170 520 Q210 480 215 430 L240 430 Q245 490 200 540 Z" fill="#c98e5f" stroke="#222" stroke-width="4" />
    <path d="M30 600 Q30 535 125 525 Q220 535 220 600 Z" fill="#e8a32c" />
    <!-- иконки -->
    <path d="M290 20 L320 50 M320 20 L290 50" stroke="#d33" stroke-width="8" stroke-linecap="round" />
    <path d="M290 320 L303 336 L328 308" stroke="#2a9d4a" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
