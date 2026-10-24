<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Парень оборачивается на другую девушку, пока рядом стоит его девушка">
    <rect width="600" height="400" :fill="bg" />
    <rect y="330" width="600" height="70" fill="#00000022" />
    <!-- левая девушка (обиженная) -->
    <path d="M70 400 V270 Q70 235 125 235 Q180 235 180 270 V400 Z" fill="#c2415d" />
    <circle cx="125" cy="190" r="42" fill="#f1c8a5" stroke="#333" stroke-width="4" />
    <path d="M80 190 Q75 130 125 140 Q175 130 170 190 Q150 160 125 165 Q100 160 80 190 Z" fill="#5a2d17" />
    <path d="M105 195 L118 190 M145 190 L132 195" stroke="#333" stroke-width="4" stroke-linecap="round" />
    <circle cx="110" cy="203" r="3" fill="#333" /><circle cx="140" cy="203" r="3" fill="#333" />
    <path d="M110 225 Q125 215 140 225" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round" />
    <!-- парень в центре, голова повёрнута вправо -->
    <path d="M230 400 V270 Q230 235 295 235 Q360 235 360 270 V400 Z" fill="#3d6b9e" />
    <circle cx="300" cy="190" r="44" fill="#f1c8a5" stroke="#333" stroke-width="4" />
    <path d="M256 180 Q260 140 305 142 Q345 145 344 182 Q320 160 290 165 Q270 165 256 180 Z" fill="#2b2b2b" />
    <circle cx="322" cy="195" r="4" fill="#333" /><circle cx="338" cy="195" r="4" fill="#333" />
    <path d="M326 218 Q335 222 342 216" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round" />
    <!-- правая девушка -->
    <path d="M420 400 V270 Q420 235 480 235 Q540 235 540 270 V400 Z" fill="#2e9e75" />
    <circle cx="480" cy="190" r="42" fill="#f1c8a5" stroke="#333" stroke-width="4" />
    <path d="M435 195 Q420 120 480 130 Q540 120 525 195 Q515 150 480 150 Q445 150 435 195 Z" fill="#e0b040" />
    <circle cx="465" cy="195" r="3" fill="#333" /><circle cx="495" cy="195" r="3" fill="#333" />
    <path d="M465 215 Q480 230 495 215" stroke="#c0392b" stroke-width="4" fill="none" stroke-linecap="round" />
  </svg>
</template>
