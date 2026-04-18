export function useReveal() {
  const observer = ref<IntersectionObserver | null>(null)

  function init() {
    if (!import.meta.client) return
    observer.value?.disconnect()
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.value?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.value?.observe(el))
  }

  onMounted(() => nextTick(init))
  onUnmounted(() => observer.value?.disconnect())

  return { init }
}
