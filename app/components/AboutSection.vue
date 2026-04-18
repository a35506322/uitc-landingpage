<template>
  <section class="sec" id="about">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="sec-num"><span class="idx">01</span>ABOUT / 關於網通</div>
        <h2 class="sec-title"><span class="tag">WHO WE ARE</span>專業,是時間堆疊的結果。</h2>
      </div>
      <div class="about-grid">
        <div class="about-body reveal">
          <p>聯邦網通科技股份有限公司成立於 <b>1998 年 8 月 10 日</b>,為<span class="highlight">聯邦銀行子公司</span>。主要業務為系統整合、金融應用程式、IBM 大型主機應用程式、IBM Lotus Notes 應用程式與 Web 應用程式設計開發。</p>
          <p>我們同時經營 <b>yesgogogo 即食購</b>、<b>Papawash</b> 電子商務網站,並提供聯邦銀行信用卡卡友紅利兌換平台。</p>
          <p>本著「熱忱、穩健、效率、創新」的核心精神,透過多年軟硬體整合經驗,掌握資訊市場脈動,持續朝向銀行信用卡資訊系統建置維護、銀行資訊系統建置維護、資訊系統整合與應用軟體設計四大營運方向前進。</p>
        </div>
        <aside class="about-card reveal d2">
          <div class="est">ESTABLISHED · 成立於</div>
          <div class="year">19<em>98</em></div>
          <div class="since">SINCE AUGUST 10, 1998</div>
          <dl class="meta">
            <div><dt>PARENT</dt><dd><b>聯邦銀行</b><br>Union Bank</dd></div>
            <div><dt>HQ</dt><dd><b>台北內湖</b><br>Ruiguang Rd.</dd></div>
            <div><dt>FOCUS</dt><dd><b>金融資訊</b><br>Fintech &amp; SI</dd></div>
            <div><dt>STACK</dt><dd><b>IBM · Notes</b><br>Mainframe</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: start; }
@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; gap: 40px; } }

.about-body p { font-size: 17px; line-height: 1.9; color: var(--ink-2); margin-bottom: 20px; }
.about-body p b { color: var(--ink); font-weight: 700; }
.about-body .highlight { display: inline; background: linear-gradient(transparent 60%, var(--accent) 60%); }

.about-card {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 32px;
  background: var(--bg-2);
  position: relative;
  overflow: hidden;
}
.about-card .est { font-family: var(--mono); font-size: 11px; letter-spacing: .12em; color: var(--ink-3); }
.about-card .year {
  font-family: var(--sans);
  font-weight: 900;
  font-size: 128px;
  line-height: 1;
  letter-spacing: -.06em;
  color: var(--ink);
  margin: 14px 0 6px;
}
.about-card .year em { font-style: normal; color: var(--primary); }
.about-card .since { font-family: var(--mono); font-size: 12px; color: var(--ink-2); letter-spacing: .05em; }
.about-card .meta {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px dashed var(--line);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-2);
}
.about-card .meta dt { color: var(--ink-3); letter-spacing: .1em; margin-bottom: 4px; font-size: 10px; text-transform: uppercase; }
.about-card .meta dd b { color: var(--ink); font-weight: 500; }
</style>
