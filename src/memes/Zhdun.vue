<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Ждун: персонаж ждёт у стола">
    <rect width="600" height="600" :fill="bg" />
    <!-- часы на стене -->
    <circle cx="470" cy="130" r="55" fill="#fff" stroke="#333" stroke-width="6" />
    <path d="M470 130 V95 M470 130 L495 145" stroke="#333" stroke-width="6" stroke-linecap="round" />
    <!-- стол -->
    <rect x="0" y="470" width="600" height="130" fill="#8b5e3c" />
    <rect x="0" y="470" width="600" height="14" fill="#a8764b" />
    <!-- тело -->
    <path d="M170 600 V470 Q170 400 300 400 Q430 400 430 470 V600 Z" fill="#4a6fa5" />
    <!-- голова -->
    <ellipse cx="300" cy="270" rx="95" ry="120" fill="#f3d9b8" stroke="#333" stroke-width="5" />
    <!-- уши -->
    <ellipse cx="205" cy="280" rx="12" ry="24" fill="#f3d9b8" stroke="#333" stroke-width="4" />
    <ellipse cx="395" cy="280" rx="12" ry="24" fill="#f3d9b8" stroke="#333" stroke-width="4" />
    <!-- глаза -->
    <ellipse cx="265" cy="260" rx="20" ry="14" fill="#fff" stroke="#333" stroke-width="4" />
    <ellipse cx="335" cy="260" rx="20" ry="14" fill="#fff" stroke="#333" stroke-width="4" />
    <circle cx="272" cy="262" r="6" fill="#333" />
    <circle cx="342" cy="262" r="6" fill="#333" />
    <path d="M240 232 Q265 222 290 236 M310 236 Q335 222 360 232" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round" />
    <!-- нос и грустный рот -->
    <path d="M300 270 V305 H290" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M265 345 Q300 325 335 345" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round" />
    <!-- сложенные руки -->
    <ellipse cx="300" cy="470" rx="70" ry="22" fill="#f3d9b8" stroke="#333" stroke-width="4" />
    <path d="M260 470 H340" stroke="#333" stroke-width="3" />
  </svg>
</template>
