<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Ёжик с узелком в тумане и силуэт лошади">
    <defs>
      <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffffff00" /><stop offset="0.55" stop-color="#ffffffcc" /><stop offset="1" stop-color="#ffffff00" />
      </linearGradient>
    </defs>
    <rect width="600" height="500" :fill="bg" />
    <!-- деревья -->
    <g fill="#3d4f4a55">
      <rect x="40" y="60" width="26" height="340" /><rect x="520" y="40" width="30" height="360" />
      <path d="M0 400 Q150 340 300 400 T600 400 V500 H0 Z" />
    </g>
    <!-- лошадь в тумане -->
    <g fill="#f2f2f2" opacity="0.9">
      <ellipse cx="400" cy="300" rx="85" ry="42" />
      <path d="M440 275 Q470 215 485 175 L515 190 Q500 240 480 290 Z" />
      <path d="M485 175 L505 140 L520 170 L530 195 L515 190 Z" />
      <rect x="338" y="320" width="14" height="80" /><rect x="372" y="324" width="14" height="76" />
      <rect x="428" y="324" width="14" height="76" /><rect x="454" y="318" width="14" height="82" />
    </g>
    <!-- ёжик -->
    <g transform="translate(180 360)">
      <path d="M-70 10 Q-80 -70 -10 -75 Q60 -75 70 -10 Q75 20 50 30 L-50 30 Q-70 28 -70 10 Z" fill="#6a4a30" stroke="#2d1e12" stroke-width="4" />
      <path d="M-55 -40 l8 -22 l10 20 l12 -22 l8 22 l14 -20 l6 22 l16 -14" stroke="#2d1e12" stroke-width="4" fill="none" stroke-linejoin="round" />
      <path d="M45 -5 Q95 -10 100 25 Q70 40 40 28 Z" fill="#e6c9a0" stroke="#2d1e12" stroke-width="4" />
      <circle cx="104" cy="22" r="6" fill="#222" />
      <circle cx="78" cy="10" r="4" fill="#222" />
      <rect x="-30" y="28" width="12" height="18" rx="4" fill="#e6c9a0" stroke="#2d1e12" stroke-width="3" />
      <rect x="15" y="28" width="12" height="18" rx="4" fill="#e6c9a0" stroke="#2d1e12" stroke-width="3" />
      <!-- узелок -->
      <path d="M-60 -10 L-110 -50 L-90 -60 L-50 -30 Z" fill="#c9c9d6" stroke="#2d1e12" stroke-width="3" />
      <circle cx="-105" cy="-70" r="24" fill="#d6d6e3" stroke="#2d1e12" stroke-width="3" />
    </g>
    <!-- туман поверх -->
    <rect y="170" width="600" height="260" fill="url(#fog)" />
    <rect y="240" width="600" height="200" fill="url(#fog)" opacity="0.7" />
  </svg>
</template>
