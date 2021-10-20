<template>
  <button
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
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
