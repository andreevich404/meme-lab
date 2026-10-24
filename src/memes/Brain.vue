<script setup lang="ts">
defineProps<{ bg: string }>()
</script>

<template>
  <svg viewBox="0 0 600 720" xmlns="http://www.w3.org/2000/svg" class="block h-full w-full" role="img" aria-label="Расширяющийся мозг: четыре уровня">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff7a8" /><stop offset="1" stop-color="#fff7a800" />
      </radialGradient>
    </defs>
    <rect width="600" height="720" :fill="bg" />
    <g v-for="i in 4" :key="i">
      <rect x="0" :y="(i - 1) * 180" width="600" height="180" :fill="i % 2 ? '#ffffff14' : '#00000014'" />
      <path :d="`M0 ${i * 180} H600`" stroke="#00000044" stroke-width="3" />
      <rect x="360" :y="(i - 1) * 180 + 4" width="240" height="172" fill="#00000012" />
    </g>
    <!-- уровень 1: маленький мозг -->
    <g transform="translate(480 90)">
      <ellipse rx="34" ry="26" fill="#f2a0b5" stroke="#333" stroke-width="4" />
      <path d="M-14 -10 Q0 4 -4 14 M10 -12 Q4 2 14 10" stroke="#333" stroke-width="3" fill="none" />
    </g>
    <!-- уровень 2 -->
    <g transform="translate(480 270)">
      <ellipse rx="50" ry="38" fill="#f2a0b5" stroke="#333" stroke-width="4" />
      <path d="M-24 -16 Q-6 6 -12 22 M4 -22 Q-4 2 10 14 M26 -10 Q18 6 30 14" stroke="#333" stroke-width="3" fill="none" />
    </g>
    <!-- уровень 3 -->
    <g transform="translate(480 450)">
      <circle r="85" fill="url(#glow)" />
      <ellipse rx="62" ry="48" fill="#f58aa6" stroke="#333" stroke-width="4" />
      <path d="M-30 -20 Q-8 8 -16 28 M6 -28 Q-4 4 14 18 M32 -14 Q24 8 38 18" stroke="#333" stroke-width="3" fill="none" />
    </g>
    <!-- уровень 4: космический -->
    <g transform="translate(480 630)">
      <circle r="90" fill="url(#glow)" />
      <g stroke="#ffe066" stroke-width="4" stroke-linecap="round">
        <path d="M0 -80 V-68 M0 80 V68 M-80 0 H-68 M80 0 H68 M-56 -56 L-48 -48 M56 -56 L48 -48 M-56 56 L-48 48 M56 56 L48 48" />
      </g>
      <ellipse rx="72" ry="56" fill="#ff7aa2" stroke="#333" stroke-width="4" />
      <path d="M-36 -24 Q-10 10 -20 32 M8 -34 Q-6 4 18 22 M38 -16 Q28 10 44 20" stroke="#333" stroke-width="3" fill="none" />
      <circle cx="-20" cy="-8" r="3" fill="#fff" /><circle cx="22" cy="-14" r="3" fill="#fff" /><circle cx="6" cy="14" r="3" fill="#fff" />
    </g>
  </svg>
</template>
