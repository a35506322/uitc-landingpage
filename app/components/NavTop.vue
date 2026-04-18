<script setup lang="ts">
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  })
})
</script>

<template>
  <nav class="top" :class="{ scrolled }">
    <a class="brand" href="#top">
      <span class="mark">U</span>
      <span class="name">
        <b>UITC</b> / 聯邦網通
        <span class="zh">UNITED INFO-TECH</span>
      </span>
    </a>
    <ul>
      <li><a href="#about">關於</a></li>
      <li><a href="#services">服務</a></li>
      <li><a href="#values">價值</a></li>
      <li><a href="#brands">旗下品牌</a></li>
      <li><a href="#milestones">里程碑</a></li>
      <li><a href="#contact">聯絡</a></li>
    </ul>
    <a class="cta" href="https://www.104.com.tw/company/7ms32qw" target="_blank" rel="noopener">人才招募 →</a>
  </nav>
</template>

<style scoped>
nav.top {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 48px;
  transition: background .4s ease, backdrop-filter .4s ease, border-color .4s ease;
  border-bottom: 1px solid transparent;
}
nav.top.scrolled {
  background: rgba(245, 243, 238, .78);
  backdrop-filter: saturate(180%) blur(18px);
  border-bottom-color: var(--line-2);
}
.brand { display: flex; align-items: center; gap: 12px; }
.brand .mark {
  width: 34px; height: 34px;
  display: grid; place-items: center;
  background: var(--primary); color: #fff;
  font-family: var(--mono); font-weight: 600; font-size: 15px;
  letter-spacing: -.02em; border-radius: 8px;
}
.brand .name { font-family: var(--mono); font-size: 13px; letter-spacing: .04em; color: var(--ink); }
.brand .name b { font-weight: 600; }
.brand .name .zh {
  display: block; font-family: var(--sans); font-size: 10px;
  letter-spacing: .3em; color: var(--ink-3); margin-top: 2px;
}
ul { display: flex; gap: 28px; list-style: none; font-family: var(--mono); font-size: 12px; letter-spacing: .06em; }
ul a { color: var(--ink-2); position: relative; padding: 4px 0; transition: color .2s; }
ul a::before {
  content: ""; position: absolute;
  left: 0; right: 100%; bottom: -2px;
  height: 1px; background: var(--primary);
  transition: right .35s cubic-bezier(.2, .8, .2, 1);
}
ul a:hover { color: var(--primary); }
ul a:hover::before { right: 0; }
.cta {
  font-family: var(--mono); font-size: 12px;
  padding: 10px 16px;
  border: 1px solid var(--ink); border-radius: 999px;
  color: var(--ink); transition: all .25s;
}
.cta:hover { background: var(--ink); color: var(--bg); }
@media (max-width: 900px) {
  nav.top { padding: 16px 24px; }
  ul { display: none; }
}
</style>
