<template>
  <section class="sec" id="services">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="sec-num"><span class="idx">02</span>SERVICES / 我們能提供什麼?</div>
        <h2 class="sec-title"><span class="tag">WHAT WE DO</span>四條產品線,一個承諾。</h2>
      </div>
      <div class="services">
        <article class="service reveal">
          <div>
            <div class="n">/ 01</div>
            <h3>網站設計及<br>電子商務經營</h3>
            <p>從品牌網站、購物平台到會員系統,提供端到端的電商基礎建設與維運支援。</p>
          </div>
          <div class="glyph">
            <svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="26" rx="2"/><path d="M6 18h36"/><circle cx="11" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>
          </div>
          <div class="arrow"><span class="l"></span>E-COMMERCE &amp; WEB</div>
        </article>
        <article class="service reveal d1">
          <div>
            <div class="n">/ 02</div>
            <h3>信用卡資訊<br>處理委外服務</h3>
            <p>承接聯邦銀行信用卡資訊系統業務,提供卡友紅利兌換平台與高安全標準的交易處理。</p>
          </div>
          <div class="glyph">
            <svg viewBox="0 0 48 48"><rect x="4" y="12" width="40" height="26" rx="2"/><path d="M4 20h40M10 30h12M28 30h10"/></svg>
          </div>
          <div class="arrow"><span class="l"></span>CREDIT CARD PROCESSING</div>
        </article>
        <article class="service reveal d2">
          <div>
            <div class="n">/ 03</div>
            <h3>Lotus Notes<br>電子化流程開發</h3>
            <p>深耕 IBM Lotus Notes 超過二十年,為企業打造量身訂製的電子表單、簽核流程與知識管理平台。</p>
          </div>
          <div class="glyph">
            <svg viewBox="0 0 48 48"><path d="M8 8h24l8 8v24H8z"/><path d="M32 8v8h8"/><path d="M14 26h20M14 32h14"/></svg>
          </div>
          <div class="arrow"><span class="l"></span>WORKFLOW AUTOMATION</div>
        </article>
        <article class="service reveal d3">
          <div>
            <div class="n">/ 04</div>
            <h3>金融業務<br>解決方案開發</h3>
            <p>涵蓋 IBM 大型主機應用、銀行資訊系統建置維護、系統整合與應用軟體設計,陪銀行打贏每一場數位戰。</p>
          </div>
          <div class="glyph">
            <svg viewBox="0 0 48 48"><path d="M6 40h36M10 40V22M18 40V14M26 40V26M34 40V18M42 40V10"/></svg>
          </div>
          <div class="arrow"><span class="l"></span>BANKING SOLUTIONS</div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
}
@media (max-width: 720px) { .services { grid-template-columns: 1fr; } }
.service {
  background: var(--bg);
  padding: 44px 40px 48px;
  position: relative;
  transition: background .35s ease;
  cursor: default;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.service:hover { background: var(--bg-2); }
.n { font-family: var(--mono); font-size: 11px; color: var(--ink-3); letter-spacing: .14em; }
.service h3 { font-family: var(--sans); font-size: 30px; font-weight: 700; letter-spacing: -.02em; margin-top: 14px; line-height: 1.2; }
.service p { margin-top: 20px; font-size: 15px; color: var(--ink-2); line-height: 1.75; }
.glyph { position: absolute; top: 36px; right: 36px; width: 48px; height: 48px; }
.glyph svg { width: 100%; height: 100%; stroke: var(--ink); fill: none; stroke-width: 1.2; transition: stroke .3s, transform .5s cubic-bezier(.2, .8, .2, 1); }
.service:hover .glyph svg { stroke: var(--primary); transform: rotate(10deg) scale(1.08); }
.arrow {
  font-family: var(--mono); font-size: 12px; color: var(--primary);
  letter-spacing: .1em; margin-top: 32px;
  display: flex; align-items: center; gap: 8px;
  opacity: 0; transform: translateX(-6px);
  transition: all .35s;
}
.service:hover .arrow { opacity: 1; transform: translateX(0); }
.arrow .l { display: inline-block; width: 24px; height: 1px; background: var(--primary); }
</style>
