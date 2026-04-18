<template>
  <section class="sec" id="values">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="sec-num"><span class="idx">03</span>VALUES / 核心價值</div>
        <h2 class="sec-title"><span class="tag">OUR DNA</span>四個字,寫了二十八年。</h2>
      </div>
      <div class="values-row">
        <div class="value reveal">
          <div class="v-n">/ 01</div>
          <div class="v-zh">熱忱</div>
          <div class="v-en">Passion</div>
          <p class="v-desc">對技術與產業的熱情,是所有長久合作的起點。</p>
        </div>
        <div class="value reveal d1">
          <div class="v-n">/ 02</div>
          <div class="v-zh">穩健</div>
          <div class="v-en">Stability</div>
          <p class="v-desc">金融系統要的不是速成,是每一行程式碼的可靠。</p>
        </div>
        <div class="value reveal d2">
          <div class="v-n">/ 03</div>
          <div class="v-zh">效率</div>
          <div class="v-en">Efficiency</div>
          <p class="v-desc">在嚴謹的流程中追求速度,是我們對客戶的承諾。</p>
        </div>
        <div class="value reveal d3">
          <div class="v-n">/ 04</div>
          <div class="v-zh">創新</div>
          <div class="v-en">Innovation</div>
          <p class="v-desc">掌握資訊市場脈動,讓既有系統持續進化。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
@media (max-width: 900px) { .values-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .values-row { grid-template-columns: 1fr; } }

.value {
  padding: 40px 28px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--bg);
  transition: all .35s;
  position: relative;
  overflow: hidden;
}
.value:hover { background: var(--ink); color: var(--bg); border-color: var(--ink); transform: translateY(-4px); }
.value:hover .v-en { color: var(--accent); }
.value:hover .v-desc { color: rgba(245, 243, 238, .7); }

.v-n { font-family: var(--mono); font-size: 11px; color: var(--primary); letter-spacing: .14em; }
.v-zh { font-family: var(--sans); font-weight: 900; font-size: 44px; letter-spacing: -.02em; margin-top: 18px; line-height: 1; }
.v-en { font-family: var(--mono); font-size: 12px; color: var(--ink-3); letter-spacing: .18em; margin-top: 6px; text-transform: uppercase; transition: color .35s; }
.v-desc { font-size: 13px; line-height: 1.7; color: var(--ink-2); margin-top: 24px; transition: color .35s; }
</style>
