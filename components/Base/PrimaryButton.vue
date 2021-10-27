<template>
  <a
    :href="link"
    target="_blank"
    class="
      px-4
      py-2
      border border-burgundy
      bg-burgundy
      dark:bg-gold dark:border-gold
      font-serif
      text-lg text-white
      dark:text-black
      transition-colors
      duration-300
    "
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
