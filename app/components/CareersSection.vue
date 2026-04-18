<template>
  <section class="sec" id="careers">
    <div class="wrap">
      <div class="careers-cta reveal">
        <div>
          <div class="tag">/ JOIN US · 人才招募</div>
          <h3>寫程式的人,<br>值得一個寫得久的地方。</h3>
          <p>聯邦網通提供穩定的金融產業經驗、完整的技術棧養成,以及讓你不用常常換工作的環境。現正招募金融系統工程師、前後端、資料庫與 UI/UX。</p>
        </div>
        <div>
          <a class="apply" href="https://www.104.com.tw/company/7ms32qw" target="_blank" rel="noopener">
            查看 104 職缺 <span class="arr">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.careers-cta {
  position: relative;
  background: var(--ink);
  color: var(--bg);
  border-radius: 24px;
  padding: 72px 64px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: center;
}
@media (max-width: 900px) { .careers-cta { grid-template-columns: 1fr; padding: 48px 32px; } }
.careers-cta::before {
  content: "";
  position: absolute;
  top: -40%; right: -10%;
  width: 520px; height: 520px;
  background: radial-gradient(circle, var(--primary) 0%, transparent 60%);
  opacity: .6;
}
.careers-cta > * { position: relative; z-index: 2; }
.tag { font-family: var(--mono); font-size: 12px; letter-spacing: .14em; color: var(--accent); }
h3 { font-family: var(--sans); font-weight: 900; font-size: clamp(36px, 5vw, 64px); letter-spacing: -.03em; line-height: 1.05; margin-top: 18px; }
p { font-size: 16px; line-height: 1.7; color: rgba(245, 243, 238, .7); margin-top: 20px; max-width: 440px; }
.apply {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 28px;
  background: var(--accent);
  color: var(--ink);
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: .08em;
  border-radius: 999px;
  transition: all .25s;
}
.apply:hover { transform: translateX(4px); background: #fff; }
.arr { transition: transform .25s; }
.apply:hover .arr { transform: translateX(4px); }
</style>
