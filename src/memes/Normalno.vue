<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Собака с кружкой в горящей комнате">
    <rect width="600" height="400" :fill="bg" />
    <rect x="0" y="320" width="600" height="80" fill="#6b4a2f" />
    <!-- окно -->
    <rect x="60" y="90" width="110" height="130" fill="#ff9d4a" stroke="#4a2f1a" stroke-width="6" />
    <path d="M115 90 V220 M60 155 H170" stroke="#4a2f1a" stroke-width="5" />
    <!-- пламя -->
    <g fill="#ff6a00">
      <path d="M0 400 L0 250 Q30 300 50 230 Q80 300 100 260 Q130 330 150 400 Z" />
      <path d="M430 400 Q440 280 470 300 Q480 220 520 270 Q540 200 570 260 Q600 230 600 400 Z" />
      <path d="M200 400 Q215 340 240 360 Q255 310 280 400 Z" />
    </g>
    <g fill="#ffd23f">
      <path d="M20 400 L20 320 Q45 350 60 310 Q85 360 100 400 Z" />
      <path d="M470 400 Q480 340 500 350 Q515 310 540 345 Q560 330 570 400 Z" />
    </g>
    <!-- стол -->
    <rect x="270" y="300" width="150" height="14" fill="#4a2f1a" />
    <rect x="285" y="314" width="12" height="86" fill="#4a2f1a" />
    <rect x="395" y="314" width="12" height="86" fill="#4a2f1a" />
    <!-- кружка -->
    <rect x="320" y="262" width="40" height="38" rx="4" fill="#fff" stroke="#333" stroke-width="3" />
    <path d="M360 272 Q378 272 378 285 Q378 296 360 294" stroke="#333" stroke-width="3" fill="none" />
    <!-- собака -->
    <ellipse cx="220" cy="300" rx="55" ry="60" fill="#e3a857" stroke="#333" stroke-width="4" />
    <ellipse cx="220" cy="210" rx="50" ry="46" fill="#e3a857" stroke="#333" stroke-width="4" />
    <path d="M175 185 Q150 210 165 250 Q185 235 190 205 Z" fill="#a8702a" stroke="#333" stroke-width="4" />
    <path d="M265 185 Q290 210 275 250 Q255 235 250 205 Z" fill="#a8702a" stroke="#333" stroke-width="4" />
    <!-- шляпа -->
    <ellipse cx="220" cy="172" rx="52" ry="8" fill="#333" />
    <path d="M190 172 V140 Q220 125 250 140 V172 Z" fill="#555" />
    <ellipse cx="205" cy="210" rx="6" ry="7" fill="#333" />
    <ellipse cx="235" cy="210" rx="6" ry="7" fill="#333" />
    <ellipse cx="220" cy="228" rx="12" ry="8" fill="#333" />
    <path d="M205 242 Q220 254 235 242" stroke="#333" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="M262 290 Q300 280 320 285" stroke="#333" stroke-width="12" stroke-linecap="round" fill="none" />
    <path d="M262 290 Q300 280 320 285" stroke="#e3a857" stroke-width="7" stroke-linecap="round" fill="none" />
  </svg>
</template>
