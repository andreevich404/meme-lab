<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Скептичный кот в очках">
    <rect width="600" height="600" :fill="bg" />
    <!-- тело -->
    <path d="M140 600 Q140 470 300 460 Q460 470 460 600 Z" fill="#9a9a9a" />
    <!-- уши -->
    <path d="M140 250 L150 110 L250 190 Z" fill="#9a9a9a" stroke="#333" stroke-width="5" stroke-linejoin="round" />
    <path d="M460 250 L450 110 L350 190 Z" fill="#9a9a9a" stroke="#333" stroke-width="5" stroke-linejoin="round" />
    <path d="M165 220 L168 150 L215 190 Z M435 220 L432 150 L385 190 Z" fill="#f2a9b5" />
    <!-- голова -->
    <ellipse cx="300" cy="320" rx="165" ry="150" fill="#9a9a9a" stroke="#333" stroke-width="5" />
    <path d="M300 180 V230 M270 190 L278 225 M330 190 L322 225" stroke="#6e6e6e" stroke-width="8" stroke-linecap="round" />
    <!-- очки -->
    <circle cx="225" cy="305" r="52" fill="#ffffff55" stroke="#222" stroke-width="8" />
    <circle cx="375" cy="305" r="52" fill="#ffffff55" stroke="#222" stroke-width="8" />
    <path d="M277 300 Q300 285 323 300" stroke="#222" stroke-width="8" fill="none" />
    <path d="M173 300 L148 285 M427 300 L452 285" stroke="#222" stroke-width="8" stroke-linecap="round" />
    <!-- глаза: прищур -->
    <ellipse cx="225" cy="312" rx="22" ry="16" fill="#e8f06a" stroke="#222" stroke-width="3" />
    <ellipse cx="375" cy="312" rx="22" ry="16" fill="#e8f06a" stroke="#222" stroke-width="3" />
    <rect x="203" y="294" width="44" height="14" fill="#9a9a9a" />
    <path d="M203 308 H247 M353 308 H397" stroke="#222" stroke-width="4" />
    <rect x="353" y="294" width="44" height="12" fill="#9a9a9a" />
    <ellipse cx="232" cy="316" rx="5" ry="8" fill="#222" /><ellipse cx="382" cy="316" rx="5" ry="8" fill="#222" />
    <!-- бровь -->
    <path d="M345 252 Q380 232 410 250" stroke="#333" stroke-width="7" fill="none" stroke-linecap="round" />
    <!-- нос, рот -->
    <path d="M285 385 L315 385 L300 402 Z" fill="#f2a9b5" stroke="#333" stroke-width="3" stroke-linejoin="round" />
    <path d="M300 402 V415 M270 425 Q290 415 300 415 Q310 415 335 428" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M200 395 H120 M200 410 L125 430 M400 395 H480 M400 410 L475 430" stroke="#333" stroke-width="3" stroke-linecap="round" />
  </svg>
</template>
