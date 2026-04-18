<template>
  <section class="sec" id="contact">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="sec-num"><span class="idx">07</span>CONTACT / 聯絡我們</div>
        <h2 class="sec-title"><span class="tag">GET IN TOUCH</span>找我們聊聊。</h2>
      </div>
      <div class="contact">
        <div>
          <dl class="contact-block reveal"><dt>TEL · 電話</dt><dd><a href="tel:0266012888">02-6601-2888</a></dd></dl>
          <dl class="contact-block reveal d1"><dt>FAX · 傳真</dt><dd>02-8752-6182</dd></dl>
          <dl class="contact-block reveal d2"><dt>EMAIL · 信箱</dt><dd><a href="mailto:uitcsupport@uitc.com.tw">uitcsupport@uitc.com.tw</a></dd></dl>
          <dl class="contact-block reveal d3"><dt>ADDRESS · 地址</dt><dd>114 台北市內湖區<br>瑞光路 399 號 6 樓</dd></dl>
        </div>
        <div class="map reveal d2" aria-label="內湖瑞光路地圖示意">
          <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14,20,20,.07)" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="400" height="280" fill="#ebe8df"/>
            <rect width="400" height="280" fill="url(#grid)"/>
            <path d="M0 160 L400 140" stroke="rgba(14,20,20,.16)" stroke-width="12" fill="none"/>
            <path d="M180 0 L220 280" stroke="rgba(14,20,20,.12)" stroke-width="8" fill="none"/>
            <path d="M0 80 L400 90" stroke="rgba(14,20,20,.08)" stroke-width="4" fill="none"/>
            <path d="M0 220 L400 210" stroke="rgba(14,20,20,.08)" stroke-width="4" fill="none"/>
            <rect x="40" y="40" width="80" height="30" fill="rgba(14,20,20,.06)"/>
            <rect x="250" y="50" width="60" height="25" fill="rgba(14,20,20,.06)"/>
            <rect x="60" y="190" width="70" height="40" fill="rgba(14,20,20,.06)"/>
            <rect x="270" y="180" width="80" height="50" fill="rgba(14,20,20,.06)"/>
            <circle cx="200" cy="140" r="24" fill="rgba(26,123,123,.15)"/>
            <circle cx="200" cy="140" r="14" fill="rgba(26,123,123,.3)"/>
            <circle cx="200" cy="140" r="7" fill="#1a7b7b"/>
            <circle cx="200" cy="140" r="2.5" fill="#fff"/>
          </svg>
          <span class="pin-label">UITC HQ · 瑞光路 399 號</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
@media (max-width: 900px) { .contact { grid-template-columns: 1fr; } }

.contact-block { border-top: 1px solid var(--line); padding-top: 28px; margin-bottom: 24px; }
.contact-block dt { font-family: var(--mono); font-size: 11px; color: var(--ink-3); letter-spacing: .14em; text-transform: uppercase; }
.contact-block dd { font-family: var(--sans); font-size: 28px; font-weight: 500; letter-spacing: -.01em; margin-top: 10px; line-height: 1.3; }
.contact-block dd a:hover { color: var(--primary); }

.map {
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: var(--bg-2);
  border: 1px solid var(--line);
}
.map svg { width: 100%; height: 100%; }
.pin-label {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, calc(-50% + 34px));
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink);
  background: var(--bg);
  padding: 6px 10px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
  letter-spacing: .05em;
  white-space: nowrap;
}
</style>
