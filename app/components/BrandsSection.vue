<template>
  <section class="sec" id="brands">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="sec-num"><span class="idx">04</span>BRANDS / 旗下品牌</div>
        <h2 class="sec-title"><span class="tag">PORTFOLIO</span>我們不只做服務。<br>也經營自己的產品。</h2>
      </div>
      <div class="brands-grid">
        <a class="brand-card reveal" href="https://www.yesgogogo.com/" target="_blank" rel="noopener">
          <div>
            <div class="tag">/ E-COMMERCE · 即食購</div>
            <h4>yesgogogo<small>線上即食食品購物平台</small></h4>
            <p>從日常採買到嚴選美食,yesgogogo 即食購為忙碌生活提供最快到家的解決方案。</p>
          </div>
          <span class="go">VISIT SITE<span class="line"></span>↗</span>
        </a>
        <a class="brand-card reveal d1" href="https://www.papawash.com.tw/" target="_blank" rel="noopener">
          <div>
            <div class="tag">/ BEAUTY · 保養品</div>
            <h4>Papawash<small>日本酵素洗顏先驅品牌</small></h4>
            <p>來自日本的酵素洗顏領導品牌,透過電商通路持續為台灣消費者提供溫和的肌膚照護體驗。</p>
          </div>
          <span class="go">VISIT SITE<span class="line"></span>↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brands-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media (max-width: 720px) { .brands-grid { grid-template-columns: 1fr; } }

.brand-card {
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 48px 44px;
  background: var(--bg);
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .4s;
}
.brand-card:hover { transform: translateY(-4px); border-color: var(--primary); }
.brand-card::after {
  content: "";
  position: absolute;
  right: -60px; bottom: -60px;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  opacity: .08;
  transition: all .6s;
}
.brand-card:hover::after { opacity: .22; transform: scale(1.2); }
.tag { font-family: var(--mono); font-size: 11px; color: var(--ink-3); letter-spacing: .14em; }
.brand-card h4 { font-family: var(--sans); font-weight: 900; font-size: 42px; letter-spacing: -.02em; margin-top: 12px; line-height: 1; }
.brand-card h4 small { font-size: 14px; font-weight: 400; color: var(--ink-3); letter-spacing: .02em; display: block; margin-top: 8px; font-family: var(--mono); }
.brand-card p { font-size: 14px; color: var(--ink-2); line-height: 1.7; margin-top: 24px; max-width: 340px; position: relative; z-index: 2; }
.go { font-family: var(--mono); font-size: 12px; color: var(--primary); letter-spacing: .1em; display: inline-flex; align-items: center; gap: 10px; margin-top: 28px; position: relative; z-index: 2; }
.go .line { width: 32px; height: 1px; background: var(--primary); transition: width .3s; }
.brand-card:hover .go .line { width: 56px; }
</style>
