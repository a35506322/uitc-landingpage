<template>
  <section class="sec" id="partners">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="sec-num"><span class="idx">06</span>PARTNERS / 合作夥伴</div>
        <h2 class="sec-title"><span class="tag">TRUSTED BY</span>被金融業信任,是我們最大的資產。</h2>
      </div>
      <div class="partners reveal">
        <div class="partner"><small>GROUP PARENT</small>聯邦銀行</div>
        <div class="partner"><small>TECHNOLOGY</small>IBM Taiwan</div>
        <div class="partner"><small>PLATFORM</small>HCL Domino</div>
        <div class="partner"><small>PAYMENT</small>VISA · Master</div>
        <div class="partner"><small>E-COMMERCE</small>yesgogogo</div>
        <div class="partner"><small>BEAUTY</small>Papawash</div>
        <div class="partner"><small>RECRUIT</small>104 人力銀行</div>
        <div class="partner"><small>INFRASTRUCTURE</small>AWS · Azure</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
}
@media (max-width: 720px) { .partners { grid-template-columns: repeat(2, 1fr); } }
.partner {
  background: var(--bg);
  padding: 36px 20px;
  text-align: center;
  font-family: var(--mono);
  font-size: 14px;
  color: var(--ink-2);
  letter-spacing: .05em;
  transition: all .3s;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}
.partner:hover { background: var(--ink); color: var(--bg); }
small { font-size: 10px; letter-spacing: .18em; color: var(--ink-3); text-transform: uppercase; transition: color .3s; }
.partner:hover small { color: var(--accent); }
</style>
