<template>
  <div
    class="
      h-9
      w-9
      sm:h-12 sm:w-12
      relative
      flex
      justify-center
      items-center
      cursor-pointer
    "
    @click="scrollToTop"
  >
    <span
      class="
        font-serif
        text-burgundy
        dark:text-gold
        transition-colors
        duration-300
        text-3xl
        sm:text-4xl
      "
      >J</span
    >
    <div
      class="
        absolute
        h-9
        w-9
        sm:h-12 sm:w-12
        border border-burgundy
        dark:border-gold
        transform
        hover:rotate-90
        rotate-0
        transition
        duration-1000
      "
    ></div>
  </div>
</template>
<script>
export default {
  name: 'TheLogo',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
