<script setup lang="ts">
const SITE_URL = 'https://www.uitc.com.tw'
const SITE_NAME = '聯邦網通科技股份有限公司'

useSeoMeta({
  title: `${SITE_NAME} — UITC`,
  description: '聯邦網通科技股份有限公司成立於1998年，為聯邦銀行子公司，深耕金融資訊28年，專精系統整合、信用卡資訊處理、IBM大型主機、Lotus Notes開發及電子商務。',
  ogTitle: `${SITE_NAME} — UITC`,
  ogDescription: '深耕金融資訊28年，提供系統整合、信用卡資訊處理、Lotus Notes 流程開發、金融業務解決方案。',
  ogType: 'website',
  ogUrl: SITE_URL,
  ogSiteName: SITE_NAME,
  ogLocale: 'zh_TW',
  twitterCard: 'summary_large_image',
  twitterTitle: `${SITE_NAME} — UITC`,
  twitterDescription: '深耕金融資訊28年，提供系統整合、信用卡資訊處理、Lotus Notes 流程開發、金融業務解決方案。',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: SITE_URL }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        alternateName: 'UITC',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        foundingDate: '1998-08-10',
        description: '聯邦網通科技股份有限公司為聯邦銀行子公司，專精金融資訊系統整合、IBM大型主機、Lotus Notes應用程式及電子商務。',
        parentOrganization: {
          '@type': 'Organization',
          name: '聯邦銀行',
          alternateName: 'Union Bank of Taiwan',
          url: 'https://www.unionbank.com.tw',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '瑞光路399號6樓',
          addressLocality: '內湖區',
          addressRegion: '台北市',
          postalCode: '114',
          addressCountry: 'TW',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+886-2-6601-2888',
          faxNumber: '+886-2-8752-6182',
          email: 'uitcsupport@uitc.com.tw',
          contactType: 'customer service',
          availableLanguage: ['Chinese', 'English'],
        },
        sameAs: [
          'https://www.104.com.tw/company/7ms32qw',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '服務項目',
          itemListElement: [
            { '@type': 'Offer', name: '網站設計及電子商務經營' },
            { '@type': 'Offer', name: '信用卡資訊處理委外服務' },
            { '@type': 'Offer', name: 'Lotus Notes 電子化流程開發' },
            { '@type': 'Offer', name: '金融業務解決方案開發' },
          ],
        },
      }),
    },
  ],
})

/* init reveal observer after all sections mount */
const { init } = useReveal()
onMounted(() => nextTick(init))
</script>

<template>
  <div>
    <NavTop />
    <main id="top">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <BrandsSection />
      <MilestonesSection />
      <PartnersSection />
      <CareersSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
