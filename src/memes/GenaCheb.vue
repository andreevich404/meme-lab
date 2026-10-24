<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Зелёный крокодил и большеухий зверёк ведут диалог">
    <rect width="600" height="500" :fill="bg" />
    <rect y="420" width="600" height="80" fill="#00000026" />
    <!-- зелёный крокодил с гармошкой (слева) -->
    <path d="M60 500 V340 Q60 290 130 290 Q200 290 200 340 V500 Z" fill="#2f6f3e" />
    <path d="M110 300 L130 335 L150 300 Z" fill="#fff" />
    <path d="M125 335 L130 400 L135 335 Z" fill="#c0392b" />
    <ellipse cx="130" cy="225" rx="62" ry="60" fill="#58b368" stroke="#1d3f26" stroke-width="4" />
    <ellipse cx="185" cy="250" rx="52" ry="26" fill="#58b368" stroke="#1d3f26" stroke-width="4" />
    <path d="M150 262 Q185 275 232 258" stroke="#1d3f26" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M165 262 l6 8 l6 -8 M185 266 l6 8 l6 -8 M205 266 l6 -8" stroke="#fff" stroke-width="3" fill="none" />
    <circle cx="125" cy="205" r="14" fill="#fff" stroke="#1d3f26" stroke-width="3" /><circle cx="130" cy="207" r="5" fill="#222" />
    <circle cx="170" cy="210" r="12" fill="#fff" stroke="#1d3f26" stroke-width="3" /><circle cx="175" cy="212" r="4" fill="#222" />
    <path d="M85 165 Q130 125 175 165 Z" fill="#222" /><rect x="80" y="160" width="100" height="8" rx="4" fill="#222" />
    <!-- большеухий зверёк (справа) -->
    <ellipse cx="450" cy="400" rx="75" ry="85" fill="#b07a4a" stroke="#4d2f14" stroke-width="4" />
    <ellipse cx="450" cy="420" rx="45" ry="55" fill="#e9c9a0" />
    <ellipse cx="450" cy="290" rx="75" ry="68" fill="#b07a4a" stroke="#4d2f14" stroke-width="4" />
    <ellipse cx="365" cy="240" rx="52" ry="58" fill="#b07a4a" stroke="#4d2f14" stroke-width="4" />
    <ellipse cx="365" cy="240" rx="34" ry="40" fill="#e9c9a0" />
    <ellipse cx="535" cy="240" rx="52" ry="58" fill="#b07a4a" stroke="#4d2f14" stroke-width="4" />
    <ellipse cx="535" cy="240" rx="34" ry="40" fill="#e9c9a0" />
    <ellipse cx="450" cy="310" rx="42" ry="34" fill="#e9c9a0" />
    <circle cx="425" cy="275" r="16" fill="#fff" stroke="#4d2f14" stroke-width="3" /><circle cx="428" cy="278" r="8" fill="#222" />
    <circle cx="475" cy="275" r="16" fill="#fff" stroke="#4d2f14" stroke-width="3" /><circle cx="472" cy="278" r="8" fill="#222" />
    <ellipse cx="450" cy="300" rx="9" ry="7" fill="#222" />
    <path d="M435 322 Q450 335 465 322" stroke="#4d2f14" stroke-width="4" fill="none" stroke-linecap="round" />
    <!-- гармошка -->
    <rect x="95" y="400" width="70" height="40" rx="6" fill="#a33" stroke="#222" stroke-width="3" />
    <path d="M110 400 V440 M125 400 V440 M140 400 V440 M155 400 V440" stroke="#222" stroke-width="2" />
  </svg>
</template>
