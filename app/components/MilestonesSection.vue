<template>
  <section class="sec" id="milestones">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="sec-num"><span class="idx">05</span>MILESTONES / 公司里程碑</div>
        <h2 class="sec-title"><span class="tag">A BRIEF HISTORY</span>走過的,都成了力量。</h2>
      </div>
      <div class="timeline reveal">
        <div class="tl-item big">
          <div class="y">1998</div>
          <h5>聯邦網通科技成立</h5>
          <p>8 月 10 日於台北正式成立,成為聯邦銀行資訊業務子公司,承接集團金融資訊系統。</p>
        </div>
        <div class="tl-item">
          <div class="y">2002</div>
          <h5>導入 IBM Lotus Notes</h5>
          <p>建立企業級電子化流程開發能量,承接多家金融機構的電子表單與簽核專案。</p>
        </div>
        <div class="tl-item">
          <div class="y">2008</div>
          <h5>信用卡紅利平台上線</h5>
          <p>建置聯邦銀行信用卡卡友紅利兌換平台,整合商城、點數與交易處理。</p>
        </div>
        <div class="tl-item">
          <div class="y">2014</div>
          <h5>跨足自營電商</h5>
          <p>推出 yesgogogo 即食購與 Papawash 兩個自營電商,從服務商轉型為產品經營者。</p>
        </div>
        <div class="tl-item">
          <div class="y">2020</div>
          <h5>雲端與資安升級</h5>
          <p>全面升級資訊系統架構,導入雲端混合部署與金融級資安標準,服務更敏捷。</p>
        </div>
        <div class="tl-item big">
          <div class="y">2026</div>
          <h5>邁向下一個世代</h5>
          <p>以金融資訊深耕的經驗,持續投入 AI、資料應用與新世代核心系統現代化。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline { position: relative; padding-left: 24px; border-left: 1px solid var(--line); }
.tl-item { position: relative; padding: 18px 0 42px 36px; }
.tl-item::before {
  content: "";
  position: absolute;
  left: -30px; top: 26px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--primary);
  box-shadow: 0 0 0 4px var(--bg);
}
.tl-item.big::before { background: var(--primary); }
.y { font-family: var(--mono); font-size: 28px; font-weight: 500; color: var(--primary); letter-spacing: -.01em; }
.tl-item h5 { font-family: var(--sans); font-weight: 700; font-size: 22px; letter-spacing: -.01em; margin-top: 6px; }
.tl-item p { color: var(--ink-2); font-size: 15px; line-height: 1.7; margin-top: 8px; max-width: 560px; }
</style>
