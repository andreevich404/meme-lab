<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Персонаж потеет перед выбором из двух кнопок">
    <rect width="600" height="600" :fill="bg" />
    <!-- панель -->
    <rect x="60" y="40" width="480" height="250" rx="24" fill="#ffffff" stroke="#333" stroke-width="5" />
    <path d="M300 40 V290" stroke="#333" stroke-width="3" stroke-dasharray="8 8" />
    <!-- кнопки -->
    <ellipse cx="180" cy="215" rx="70" ry="22" fill="#8c1c1c" />
    <ellipse cx="180" cy="200" rx="70" ry="40" fill="#e53935" stroke="#333" stroke-width="4" />
    <ellipse cx="420" cy="215" rx="70" ry="22" fill="#8c1c1c" />
    <ellipse cx="420" cy="200" rx="70" ry="40" fill="#e53935" stroke="#333" stroke-width="4" />
    <!-- персонаж -->
    <path d="M170 600 V500 Q170 430 300 430 Q430 430 430 500 V600 Z" fill="#3d6b9e" />
    <circle cx="300" cy="390" r="75" fill="#f1c8a5" stroke="#333" stroke-width="5" />
    <path d="M225 370 Q230 300 300 305 Q370 300 375 370 Q340 335 300 340 Q260 335 225 370 Z" fill="#4b2e1a" />
    <circle cx="272" cy="385" r="12" fill="#fff" stroke="#333" stroke-width="3" />
    <circle cx="328" cy="385" r="12" fill="#fff" stroke="#333" stroke-width="3" />
    <circle cx="275" cy="387" r="4" fill="#333" /><circle cx="325" cy="387" r="4" fill="#333" />
    <path d="M250 362 L290 372 M350 362 L310 372" stroke="#333" stroke-width="5" stroke-linecap="round" />
    <path d="M272 430 Q285 420 300 430 Q315 440 328 430" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round" />
    <!-- капли пота -->
    <path d="M385 340 Q397 320 409 340 Q409 354 397 354 Q385 354 385 340 Z" fill="#6ec6ff" />
    <path d="M205 330 Q215 312 225 330 Q225 342 215 342 Q205 342 205 330 Z" fill="#6ec6ff" />
    <!-- руки к кнопкам -->
    <path d="M200 500 Q150 420 170 270" stroke="#f1c8a5" stroke-width="22" stroke-linecap="round" fill="none" />
    <path d="M400 500 Q450 420 430 270" stroke="#f1c8a5" stroke-width="22" stroke-linecap="round" fill="none" />
  </svg>
</template>
