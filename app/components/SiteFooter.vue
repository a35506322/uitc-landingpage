<template>
  <footer>
    <div class="wrap">
      <div class="foot">
        <div>
          <div class="big">UITC.<br>SINCE<br>1998.
            <small>聯邦網通科技股份有限公司 · A subsidiary of Union Bank of Taiwan. Specialised in financial system integration and Lotus Notes workflow development.</small>
          </div>
        </div>
        <div>
          <h6>SITEMAP</h6>
          <ul>
            <li><a href="#about">關於網通</a></li>
            <li><a href="#services">服務項目</a></li>
            <li><a href="#values">核心價值</a></li>
            <li><a href="#brands">旗下品牌</a></li>
            <li><a href="#milestones">里程碑</a></li>
            <li><a href="#contact">聯絡我們</a></li>
          </ul>
        </div>
        <div>
          <h6>EXTERNAL</h6>
          <ul>
            <li><a href="https://www.104.com.tw/company/7ms32qw" target="_blank" rel="noopener">人才招募 ↗</a></li>
            <li><a href="http://ezone.uitc.com.tw/newarea/uitclogin.nsf" target="_blank" rel="noopener">ezone 客戶服務 ↗</a></li>
            <li><a href="https://www.yesgogogo.com/" target="_blank" rel="noopener">yesgogogo ↗</a></li>
            <li><a href="https://www.papawash.com.tw/" target="_blank" rel="noopener">Papawash ↗</a></li>
          </ul>
        </div>
        <div>
          <h6>CONTACT</h6>
          <ul>
            <li>02-6601-2888</li>
            <li>uitcsupport@uitc.com.tw</li>
            <li>台北市內湖區<br>瑞光路 399 號 6 樓</li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 聯邦網通科技股份有限公司 · UITC. All rights reserved.</span>
        <span>DESIGNED WITH CARE · TAIPEI</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 100px;
  padding: 64px 0 32px;
  border-top: 1px solid var(--line);
  background: var(--bg-2);
}
.foot { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
@media (max-width: 900px) { .foot { grid-template-columns: 1fr 1fr; gap: 32px; } }
h6 { font-family: var(--mono); font-size: 11px; color: var(--ink-3); letter-spacing: .14em; text-transform: uppercase; margin-bottom: 16px; }
ul { list-style: none; font-size: 14px; line-height: 2; color: var(--ink-2); }
ul a:hover { color: var(--primary); }
.big { font-family: var(--sans); font-weight: 900; font-size: 64px; letter-spacing: -.04em; line-height: .9; color: var(--ink); }
.big small { display: block; font-family: var(--mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-3); font-weight: 400; text-transform: uppercase; margin-top: 16px; max-width: 260px; line-height: 1.6; }
.foot-bottom {
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-3);
  letter-spacing: .08em;
}
@media (max-width: 720px) { .foot-bottom { flex-direction: column; gap: 12px; } }
</style>
