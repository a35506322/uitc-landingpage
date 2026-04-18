<script setup lang="ts">
const props = defineProps<{ artId: string }>()
</script>

<template>
  <!-- skyline -->
  <svg v-if="artId === 'skyline'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="gA" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(217,255,63,.08)" stroke-width=".5"/></pattern></defs>
    <rect width="1600" height="400" fill="url(#gA)"/>
    <g fill="rgba(14,20,20,.55)">
      <rect x="100" y="220" width="70" height="180"/><rect x="180" y="160" width="90" height="240"/>
      <rect x="280" y="200" width="60" height="200"/><rect x="350" y="120" width="110" height="280"/>
      <rect x="470" y="180" width="70" height="220"/><rect x="550" y="240" width="90" height="160"/>
      <rect x="650" y="140" width="100" height="260"/><rect x="760" y="200" width="80" height="200"/>
      <rect x="850" y="100" width="120" height="300"/><rect x="980" y="180" width="70" height="220"/>
      <rect x="1060" y="220" width="90" height="180"/><rect x="1160" y="140" width="100" height="260"/>
      <rect x="1270" y="200" width="70" height="200"/><rect x="1350" y="160" width="110" height="240"/>
      <rect x="1470" y="220" width="80" height="180"/>
    </g>
    <g fill="rgba(217,255,63,.85)">
      <rect x="120" y="240" width="6" height="6"/><rect x="140" y="260" width="6" height="6"/>
      <rect x="200" y="180" width="6" height="6"/><rect x="220" y="200" width="6" height="6"/>
      <rect x="380" y="140" width="6" height="6"/><rect x="400" y="180" width="6" height="6"/>
      <rect x="680" y="170" width="6" height="6"/><rect x="710" y="210" width="6" height="6"/>
      <rect x="880" y="130" width="6" height="6"/><rect x="910" y="170" width="6" height="6"/>
      <rect x="1180" y="170" width="6" height="6"/><rect x="1210" y="210" width="6" height="6"/>
    </g>
    <path d="M0 80 Q400 40 800 90 T1600 70" stroke="rgba(217,255,63,.4)" stroke-width="1" fill="none"/>
  </svg>

  <!-- nodes -->
  <svg v-else-if="artId === 'nodes'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g stroke="rgba(255,255,255,.2)" stroke-width="1" fill="none">
      <path d="M200 100 L500 200 L300 320 L700 280 L900 120 L1200 220 L1000 340 L1400 300"/>
      <path d="M200 100 L700 280"/><path d="M500 200 L900 120"/><path d="M300 320 L1000 340"/>
      <path d="M700 280 L1200 220"/><path d="M900 120 L1400 300"/>
    </g>
    <g fill="rgba(217,255,63,.9)">
      <circle cx="200" cy="100" r="6"/><circle cx="500" cy="200" r="10"/><circle cx="300" cy="320" r="6"/>
      <circle cx="700" cy="280" r="12"/><circle cx="900" cy="120" r="10"/><circle cx="1200" cy="220" r="8"/>
      <circle cx="1000" cy="340" r="6"/><circle cx="1400" cy="300" r="10"/>
    </g>
    <g fill="none" stroke="rgba(217,255,63,.35)" stroke-width="1">
      <circle cx="500" cy="200" r="20"/><circle cx="700" cy="280" r="24"/><circle cx="900" cy="120" r="20"/>
    </g>
  </svg>

  <!-- docs -->
  <svg v-else-if="artId === 'docs'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1.2">
      <path d="M80 80 L180 80 L210 110 L210 320 L80 320 Z"/><path d="M180 80 L180 110 L210 110"/>
      <path d="M105 150 H185 M105 180 H185 M105 210 H160 M105 240 H180"/>
    </g>
    <g fill="none" stroke="rgba(217,255,63,.55)" stroke-width="1.2">
      <path d="M340 80 L440 80 L470 110 L470 320 L340 320 Z"/><path d="M440 80 L440 110 L470 110"/>
      <path d="M365 150 H445 M365 180 H445 M365 210 H420"/>
    </g>
    <g fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1.2">
      <path d="M600 80 L700 80 L730 110 L730 320 L600 320 Z"/><path d="M700 80 L700 110 L730 110"/>
      <path d="M625 150 H705 M625 180 H705 M625 210 H680"/>
    </g>
    <g fill="none" stroke="rgba(217,255,63,.55)" stroke-width="1.2">
      <path d="M860 80 L960 80 L990 110 L990 320 L860 320 Z"/><path d="M960 80 L960 110 L990 110"/>
    </g>
    <g fill="rgba(217,255,63,.8)" font-family="monospace" font-size="11">
      <text x="270" y="185">APPROVE</text><text x="530" y="185">REVIEW</text>
      <text x="790" y="185">SIGN</text><text x="1045" y="185">ARCHIVE</text>
    </g>
    <g stroke="rgba(217,255,63,.75)" stroke-width="1.5" fill="none">
      <path d="M230 200 L340 200"/><path d="M490 200 L600 200"/>
      <path d="M750 200 L860 200"/>
    </g>
    <g fill="rgba(217,255,63,.8)">
      <polygon points="340,200 330,195 330,205"/>
      <polygon points="600,200 590,195 590,205"/>
      <polygon points="860,200 850,195 850,205"/>
    </g>
  </svg>

  <!-- cards -->
  <svg v-else-if="artId === 'cards'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(900 80) rotate(-8)">
      <rect width="380" height="230" rx="16" fill="rgba(14,20,20,.55)" stroke="rgba(217,255,63,.5)" stroke-width="1"/>
      <rect x="30" y="50" width="60" height="44" rx="4" fill="rgba(217,255,63,.7)"/>
      <text x="30" y="150" font-family="monospace" font-size="20" fill="rgba(255,255,255,.9)" letter-spacing="4">**** **** **** 1998</text>
      <text x="30" y="190" font-family="monospace" font-size="11" fill="rgba(255,255,255,.6)" letter-spacing="3">UITC · UNION BANK · CARD</text>
    </g>
    <g transform="translate(160 140) rotate(6)">
      <rect width="380" height="230" rx="16" fill="rgba(14,20,20,.4)" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
      <rect x="30" y="50" width="60" height="44" rx="4" fill="rgba(255,255,255,.25)"/>
      <text x="30" y="150" font-family="monospace" font-size="20" fill="rgba(255,255,255,.6)" letter-spacing="4">**** **** **** ****</text>
    </g>
    <g fill="rgba(217,255,63,.7)" font-family="monospace" font-size="12">
      <text x="600" y="180">+ TXN 0xA42F · $NT 3,210</text>
      <text x="600" y="210">+ TXN 0xB77C · $NT 12,900</text>
      <text x="600" y="350">+ APPROVED · 99.98% UPTIME</text>
    </g>
  </svg>

  <!-- rack -->
  <svg v-else-if="artId === 'rack'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(80 40)">
      <rect y="0" x="0" width="360" height="22" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.18)"/>
      <rect y="26" x="0" width="360" height="22" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.18)"/>
      <rect y="52" x="0" width="360" height="22" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.18)"/>
      <rect y="78" x="0" width="360" height="22" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.18)"/>
      <rect y="104" x="0" width="360" height="22" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.18)"/>
      <rect y="130" x="0" width="360" height="22" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.18)"/>
      <circle cx="14" cy="11" r="3" fill="rgba(217,255,63,.9)"/>
      <circle cx="14" cy="37" r="3" fill="rgba(217,255,63,.3)"/>
      <circle cx="14" cy="63" r="3" fill="rgba(217,255,63,.3)"/>
      <circle cx="14" cy="89" r="3" fill="rgba(217,255,63,.9)"/>
      <circle cx="14" cy="115" r="3" fill="rgba(217,255,63,.3)"/>
      <circle cx="14" cy="141" r="3" fill="rgba(217,255,63,.3)"/>
    </g>
    <g transform="translate(560 60)" fill="none" stroke="rgba(255,255,255,.2)">
      <rect width="420" height="280" rx="6"/>
      <text x="16" y="28" fill="rgba(217,255,63,.9)" stroke="none" font-family="monospace" font-size="11">z/OS · MAINFRAME · BATCH 04:12:08</text>
      <text x="16" y="60" fill="rgba(255,255,255,.7)" stroke="none" font-family="monospace" font-size="11">JOB001 · CARD-AUTH-DAILY ........ OK</text>
      <text x="16" y="82" fill="rgba(255,255,255,.7)" stroke="none" font-family="monospace" font-size="11">JOB002 · SETTLEMENT-RUN ......... OK</text>
      <text x="16" y="104" fill="rgba(255,255,255,.7)" stroke="none" font-family="monospace" font-size="11">JOB003 · RECON-LEDGER ........... OK</text>
      <text x="16" y="126" fill="rgba(255,255,255,.7)" stroke="none" font-family="monospace" font-size="11">JOB004 · FX-RATE-SYNC ........... OK</text>
      <text x="16" y="148" fill="rgba(255,255,255,.7)" stroke="none" font-family="monospace" font-size="11">JOB005 · BACKUP-VOL-A ........... OK</text>
      <text x="16" y="192" fill="rgba(217,255,63,.9)" stroke="none" font-family="monospace" font-size="11">SYSTEM READY · UPTIME 9,847 HRS</text>
    </g>
  </svg>

  <!-- web -->
  <svg v-else-if="artId === 'web'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(140 40)">
      <rect width="780" height="320" rx="10" fill="rgba(14,20,20,.55)" stroke="rgba(255,255,255,.2)"/>
      <rect width="780" height="32" rx="10" fill="rgba(255,255,255,.08)"/>
      <circle cx="18" cy="16" r="5" fill="rgba(255,90,90,.7)"/><circle cx="36" cy="16" r="5" fill="rgba(255,200,90,.7)"/><circle cx="54" cy="16" r="5" fill="rgba(120,220,130,.7)"/>
      <rect x="90" y="6" width="300" height="20" rx="10" fill="rgba(255,255,255,.08)"/>
      <text x="100" y="21" font-family="monospace" font-size="11" fill="rgba(255,255,255,.5)">https://uitc.com.tw/app</text>
      <g font-family="monospace" font-size="13" fill="rgba(217,255,63,.8)">
        <text x="24" y="80">01  function deploy() {</text>
        <text x="24" y="102" fill="rgba(255,255,255,.75)">02    await pipeline.run({ env: 'prod' })</text>
        <text x="24" y="124" fill="rgba(255,255,255,.75)">03    return 'SHIPPED'</text>
        <text x="24" y="146" fill="rgba(255,255,255,.75)">04  }</text>
        <text x="24" y="270" fill="rgba(217,255,63,.9)">→ BUILD PASSED · 42 TESTS</text>
        <text x="24" y="292" fill="rgba(255,255,255,.5)">→ LIGHTHOUSE 98/100</text>
      </g>
    </g>
    <g transform="translate(1000 60)" fill="none" stroke="rgba(255,255,255,.2)">
      <rect width="420" height="280" rx="10"/>
      <polyline points="20,240 70,200 120,220 170,160 220,180 270,120 320,140 370,80 400,100" stroke="rgba(217,255,63,.7)" stroke-width="2" fill="none"/>
      <text x="20" y="30" font-family="monospace" font-size="12" fill="rgba(217,255,63,.9)" stroke="none">UPTIME · 30 DAYS</text>
    </g>
  </svg>

  <!-- ecom -->
  <svg v-else-if="artId === 'ecom'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g v-for="(pos, i) in [[120,60],[340,60],[560,60],[780,60],[1000,60],[1220,60],[120,220],[340,220],[560,220],[780,220],[1000,220],[1220,220]]" :key="i" :transform="`translate(${pos[0]} ${pos[1]})`">
      <rect width="180" height="140" rx="8" fill="rgba(14,20,20,.45)" stroke="rgba(255,255,255,.15)"/>
      <rect x="16" y="16" width="148" height="80" rx="4" :fill="i%3===0 ? 'rgba(217,255,63,.18)' : 'rgba(255,255,255,.08)'"/>
      <rect x="16" y="108" width="80" height="6" rx="3" fill="rgba(255,255,255,.3)"/>
      <rect x="16" y="120" width="50" height="5" rx="2" fill="rgba(217,255,63,.7)"/>
    </g>
  </svg>

  <!-- dash -->
  <svg v-else-if="artId === 'dash'" viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(120 40)">
      <rect width="320" height="140" rx="10" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.15)"/>
      <text x="20" y="34" font-family="monospace" font-size="11" fill="rgba(255,255,255,.5)">DAILY VOLUME</text>
      <text x="20" y="78" font-family="sans-serif" font-weight="800" font-size="34" fill="rgba(217,255,63,.95)">$ 24.6M</text>
      <text x="20" y="108" font-family="monospace" font-size="10" fill="rgba(217,255,63,.7)">↑ 12.4% vs last week</text>
    </g>
    <g transform="translate(460 40)">
      <rect width="320" height="140" rx="10" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.15)"/>
      <text x="20" y="34" font-family="monospace" font-size="11" fill="rgba(255,255,255,.5)">ACTIVE SESSIONS</text>
      <text x="20" y="78" font-family="sans-serif" font-weight="800" font-size="34" fill="rgba(255,255,255,.95)">18,204</text>
    </g>
    <g transform="translate(800 40)">
      <rect width="320" height="140" rx="10" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.15)"/>
      <text x="20" y="34" font-family="monospace" font-size="11" fill="rgba(255,255,255,.5)">UPTIME · 90 DAYS</text>
      <text x="20" y="78" font-family="sans-serif" font-weight="800" font-size="34" fill="rgba(217,255,63,.95)">99.98%</text>
    </g>
    <g transform="translate(1140 40)">
      <rect width="320" height="140" rx="10" fill="rgba(14,20,20,.5)" stroke="rgba(255,255,255,.15)"/>
      <text x="20" y="34" font-family="monospace" font-size="11" fill="rgba(255,255,255,.5)">SLA STATUS</text>
      <circle cx="70" cy="90" r="28" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="6"/>
      <circle cx="70" cy="90" r="28" fill="none" stroke="rgba(217,255,63,.9)" stroke-width="6" stroke-dasharray="160 200" transform="rotate(-90 70 90)"/>
      <text x="120" y="88" font-family="sans-serif" font-weight="800" font-size="22" fill="rgba(255,255,255,.95)">A+</text>
      <text x="120" y="108" font-family="monospace" font-size="10" fill="rgba(255,255,255,.5)">ALL SYSTEMS GO</text>
    </g>
    <g transform="translate(120 200)" fill="none">
      <rect width="1340" height="160" rx="10" fill="rgba(14,20,20,.4)" stroke="rgba(255,255,255,.15)"/>
      <polyline points="20,140 73,120 126,125 179,100 232,115 285,90 338,105 391,80 444,100 497,75 550,95 603,70 656,90 709,65 762,85 815,60 868,80 921,55" stroke="rgba(217,255,63,.55)" stroke-width="2"/>
    </g>
  </svg>
</template>
