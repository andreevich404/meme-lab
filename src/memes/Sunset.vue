<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Абстрактный закат над горами">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" :stop-color="bg" /><stop offset="0.65" stop-color="#ff8a5c" /><stop offset="1" stop-color="#ffd166" />
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#sky)" />
    <circle cx="300" cy="270" r="75" fill="#fff3b0" />
    <circle cx="300" cy="270" r="105" fill="#fff3b030" />
    <path d="M0 400 V300 L90 230 L170 300 L250 250 L330 320 L430 220 L520 300 L600 260 V400 Z" fill="#2b2d52" />
    <path d="M0 400 V340 L120 290 L220 345 L340 300 L460 350 L600 310 V400 Z" fill="#171833" />
    <g fill="#ffffff88"><circle cx="70" cy="60" r="2" /><circle cx="520" cy="50" r="2" /><circle cx="430" cy="100" r="1.5" /><circle cx="150" cy="110" r="1.5" /></g>
  </svg>
</template>
