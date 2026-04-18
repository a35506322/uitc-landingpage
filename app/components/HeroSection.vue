<script setup lang="ts">
/* ---- slide data ---- */
const SLIDES = [
  {
    bg: 'linear-gradient(135deg,#0e1414 0%,#1a7b7b 100%)',
    label: 'BANKING & FINTECH',
    title: '深耕金融資訊 28 年',
    artId: 'skyline',
  },
  {
    bg: 'linear-gradient(135deg,#1a7b7b 0%,#0f4c4c 100%)',
    label: 'SYSTEM INTEGRATION',
    title: '端到端系統整合服務',
    artId: 'nodes',
  },
  {
    bg: 'linear-gradient(135deg,#0f4c4c 0%,#0e1414 100%)',
    label: 'LOTUS NOTES',
    title: '二十年 Notes 開發經驗',
    artId: 'docs',
  },
  {
    bg: 'linear-gradient(135deg,#2a5c5c 0%,#1a7b7b 100%)',
    label: 'CREDIT CARD PROCESSING',
    title: '信用卡資訊處理委外',
    artId: 'cards',
  },
  {
    bg: 'linear-gradient(135deg,#0e1414 0%,#3b4343 100%)',
    label: 'IBM MAINFRAME',
    title: '大型主機應用程式',
    artId: 'rack',
  },
  {
    bg: 'linear-gradient(135deg,#1a7b7b 0%,#0e1414 100%)',
    label: 'WEB APPLICATION',
    title: '現代化 Web 應用開發',
    artId: 'web',
  },
  {
    bg: 'linear-gradient(135deg,#0f4c4c 0%,#1a7b7b 100%)',
    label: 'E-COMMERCE',
    title: '自營電商平台經營',
    artId: 'ecom',
  },
  {
    bg: 'linear-gradient(135deg,#0e1414 0%,#1a7b7b 100%)',
    label: 'ENTERPRISE',
    title: '企業級金融解決方案',
    artId: 'dash',
  },
]

/* ---- typewriter messages ---- */
const TYPE_MSGS = [
  '> SYSTEM INTEGRATION / 系統整合',
  '> FINANCIAL SOFTWARE / 金融應用程式',
  '> IBM MAINFRAME & LOTUS NOTES',
  '> WEB & E-COMMERCE DEVELOPMENT',
  '> 熱忱 · 穩健 · 效率 · 創新',
]

/* ---- hero title lines ---- */
const LINES = [
  { text: '深耕金融資訊', accent: false },
  { text: '建構 下一代', accent: true, accentWord: '下一代' },
  { text: '系統整合典範。', accent: false },
]

/* ---- reactive state ---- */
const carIdx = ref(0)
const progress = ref(0)
const typerText = ref('')
const heroChars = ref<{ char: string; on: boolean; isAccent: boolean }[][]>([[], [], []])
const accentUnderlineVisible = ref(false)
const cursorLine = ref(0)
const cursorVisible = ref(true)
const counterVal = ref(0)
const yearDone = ref(false)

/* ---- computed carousel label ---- */
const currentSlide = computed(() => SLIDES[carIdx.value])
const carLabel = computed(
  () => `${String(carIdx.value + 1).padStart(2, '0')} / 08 — ${currentSlide.value.label}`
)

/* ---- carousel controls ---- */
let carTimer: ReturnType<typeof setInterval> | null = null

function nextCar() {
  carIdx.value = (carIdx.value + 1) % SLIDES.length
  progress.value = 0
}
function prevCar() {
  carIdx.value = (carIdx.value - 1 + SLIDES.length) % SLIDES.length
  progress.value = 0
}

function startCarTimer() {
  if (carTimer) clearInterval(carTimer)
  carTimer = setInterval(() => {
    progress.value = Math.min(progress.value + 100 / 80, 100)
    if (progress.value >= 100) {
      progress.value = 0
      nextCar()
    }
  }, 100)
}

/* ---- hero title typewriter ---- */
function buildHeroChars() {
  heroChars.value = LINES.map((ln) => {
    return Array.from(ln.text).map((c, ci) => {
      const accentStart = ln.accent ? ln.text.indexOf(ln.accentWord!) : -1
      const accentEnd = ln.accent ? accentStart + (ln.accentWord?.length ?? 0) : -1
      return {
        char: c,
        on: false,
        isAccent: ln.accent && ci >= accentStart && ci < accentEnd,
      }
    })
  })
}

function typeHeroTitle() {
  const allChars = heroChars.value.flat()
  let i = 0
  const BASE = 60

  function step() {
    if (i >= allChars.length) {
      accentUnderlineVisible.value = true
      cursorLine.value = LINES.length - 1
      setTimeout(() => { cursorVisible.value = false }, 1200)
      return
    }
    allChars[i].on = true
    const lineIdx = heroChars.value.findIndex((line) => line.includes(allChars[i]))
    cursorLine.value = lineIdx

    const c = allChars[i].char
    let d = BASE + (Math.random() * 40 - 20)
    if (c === ' ') d = 40
    if (c === '。' || c === '，' || c === '、') d = 260
    i++
    setTimeout(step, d)
  }
  setTimeout(step, 300)
}

/* ---- typewriter subtitle ---- */
function runTypewriter() {
  let mi = 0, ci = 0, dir = 1

  function tick() {
    const msg = TYPE_MSGS[mi]
    ci += dir
    typerText.value = msg.slice(0, ci)

    let delay = 55
    if (dir === 1 && ci === msg.length) { delay = 1400; dir = -1 }
    else if (dir === -1 && ci === 0) { dir = 1; mi = (mi + 1) % TYPE_MSGS.length; delay = 200 }
    else if (dir === -1) delay = 22

    setTimeout(tick, delay)
  }
  tick()
}

/* ---- year counter ---- */
function runCounter() {
  const target = 28
  let cur = 0
  function step() {
    cur += Math.max(1, Math.round((target - cur) / 12))
    if (cur >= target) { counterVal.value = target; yearDone.value = true; return }
    counterVal.value = cur
    requestAnimationFrame(step)
  }
  setTimeout(step, 800)
}

onMounted(() => {
  buildHeroChars()
  typeHeroTitle()
  runTypewriter()
  startCarTimer()
  runCounter()
})

onUnmounted(() => { if (carTimer) clearInterval(carTimer) })
</script>

<template>
  <section class="hero" id="top">
    <div class="wrap">
      <!-- meta bar -->
      <div class="hero-meta reveal">
        <span><span class="dot"></span>TAIPEI · TAIWAN · 台北內湖</span>
        <span>EST. 1998 · A SUBSIDIARY OF UNION BANK</span>
      </div>

      <!-- title -->
      <h1 class="hero-title" :class="{ in: accentUnderlineVisible }">
        <span
          v-for="(line, li) in heroChars"
          :key="li"
          class="line"
          :style="li === 1 ? 'position:relative' : ''"
        >
          <span
            v-for="(ch, ci) in line"
            :key="ci"
            class="ch"
            :class="{ on: ch.on, 'accent-ch': ch.isAccent }"
          >{{ ch.char === ' ' ? '\u00a0' : ch.char }}</span>
          <!-- accent underline on line 1 -->
          <span v-if="li === 1" class="accent-u" :class="{ show: accentUnderlineVisible }"></span>
          <!-- blinking cursor -->
          <span v-if="cursorLine === li && cursorVisible" class="cursor"></span>
        </span>
      </h1>

      <!-- sub row -->
      <div class="hero-sub">
        <p class="typer reveal d2">
          <span>{{ typerText }}</span><span class="caret"></span>
        </p>
        <div class="counter reveal d3">
          <span class="num">{{ yearDone ? counterVal : counterVal }}<small v-if="yearDone">+</small></span>
          <span>年 · YEARS OF EXCELLENCE</span>
        </div>
      </div>

      <!-- carousel -->
      <div class="carousel reveal d4">
        <div class="progress-bar"><i :style="{ width: progress + '%' }"></i></div>
        <div class="car-index">{{ carLabel }}</div>

        <div
          v-for="(slide, i) in SLIDES"
          :key="i"
          class="slide"
          :class="{ active: i === carIdx }"
        >
          <div class="bg" :style="{ background: slide.bg }"></div>
          <!-- SVG art placeholder via artId -->
          <div class="art">
            <CarouselArt :art-id="slide.artId" />
          </div>
          <div class="cap">
            / SLIDE {{ String(i + 1).padStart(2, '0') }}
            <b>{{ slide.title }}</b>
          </div>
        </div>

        <div class="ctrl">
          <button @click="prevCar" aria-label="prev">◀</button>
          <button @click="nextCar" aria-label="next">▶</button>
        </div>
      </div>

      <!-- ticker -->
      <div class="ticker reveal">
        <div class="ticker-track">
          <span>SYSTEM INTEGRATION</span><span>BANKING SOFTWARE</span>
          <span>LOTUS NOTES DEVELOPMENT</span><span>CREDIT CARD PROCESSING</span>
          <span>IBM MAINFRAME</span><span>WEB APPLICATION</span>
          <span>E-COMMERCE PLATFORM</span><span>ENTERPRISE SOLUTIONS</span>
          <span>SYSTEM INTEGRATION</span><span>BANKING SOFTWARE</span>
          <span>LOTUS NOTES DEVELOPMENT</span><span>CREDIT CARD PROCESSING</span>
          <span>IBM MAINFRAME</span><span>WEB APPLICATION</span>
          <span>E-COMMERCE PLATFORM</span><span>ENTERPRISE SOLUTIONS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  padding: 140px 0 60px;
  overflow: hidden;
}
.hero .wrap { position: relative; z-index: 3; }

/* meta */
.hero-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-3);
  letter-spacing: .08em;
  margin-bottom: 56px;
}
.dot {
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--primary);
  margin-right: 8px;
  animation: pulse 2s infinite;
}

/* title */
.hero-title {
  font-family: var(--sans);
  font-weight: 900;
  font-size: clamp(48px, 9vw, 148px);
  line-height: 1.08;
  letter-spacing: -.04em;
  color: var(--ink);
}
.line { display: block; padding: .02em 0; }
.ch {
  display: inline-block;
  opacity: 0;
  transform: translateY(.3em);
  transition: opacity .5s ease, transform .6s cubic-bezier(.2, .8, .2, 1);
}
.ch.on { opacity: 1; transform: none; }
.accent-ch { color: var(--primary); position: relative; z-index: 1; }
.cursor {
  display: inline-block;
  width: .08em; height: .9em;
  background: var(--primary);
  vertical-align: -.08em;
  margin-left: .04em;
  animation: blink 1s infinite;
}
.accent-u {
  position: absolute;
  height: .08em;
  background: var(--accent);
  z-index: 0;
  bottom: .15em;
  left: 0; right: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .8s cubic-bezier(.2, .8, .2, 1);
}
.accent-u.show { transform: scaleX(1); }

/* sub row */
.hero-sub {
  margin-top: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
  align-items: end;
}
@media (max-width: 900px) { .hero-sub { grid-template-columns: 1fr; gap: 24px; } }
.typer {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--ink-2);
  grid-column: span 2;
  line-height: 1.7;
}
@media (max-width: 900px) { .typer { grid-column: auto; } }
.caret {
  display: inline-block;
  width: .55em; height: 1.05em;
  background: var(--primary);
  vertical-align: -.18em;
  margin-left: 2px;
  animation: blink 1s infinite;
}
.counter { font-family: var(--mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-3); text-align: right; }
.num {
  display: block;
  font-family: var(--sans);
  font-weight: 700;
  font-size: 56px;
  color: var(--ink);
  letter-spacing: -.04em;
  line-height: 1;
}
.num small { font-size: 18px; color: var(--primary); font-weight: 500; vertical-align: super; }

/* carousel */
.carousel {
  position: relative;
  margin-top: 72px;
  height: 360px;
  border-radius: 14px;
  overflow: hidden;
  background: var(--ink);
}
.progress-bar { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: rgba(255,255,255,.15); z-index: 3; }
.progress-bar i { display: block; height: 100%; background: var(--accent); transition: width .1s linear; }
.car-index { position: absolute; top: 24px; left: 32px; z-index: 3; color: #fff; font-family: var(--mono); font-size: 12px; letter-spacing: .08em; opacity: .85; }
.slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease, transform 8s linear; transform: scale(1.06); }
.slide.active { opacity: 1; transform: scale(1); }
.slide .bg { position: absolute; inset: 0; }
.slide .art { position: absolute; inset: 0; z-index: 1; opacity: .9; }
.slide::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(14,20,20,.15) 0%, rgba(14,20,20,.75) 100%);
  z-index: 1;
}
.slide .cap {
  position: absolute;
  left: 32px; bottom: 28px;
  z-index: 2;
  color: #fff;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: .08em;
  max-width: 60%;
}
.slide .cap b { display: block; font-family: var(--sans); font-weight: 700; font-size: 26px; letter-spacing: -.01em; margin-top: 6px; }
.ctrl { position: absolute; right: 24px; bottom: 24px; z-index: 3; display: flex; gap: 6px; align-items: center; }
.ctrl button {
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.25);
  color: #fff;
  width: 38px; height: 38px;
  border-radius: 50%;
  cursor: pointer;
  font-family: var(--mono);
  transition: all .2s;
  display: grid; place-items: center;
}
.ctrl button:hover { background: rgba(255,255,255,.26); }
</style>
