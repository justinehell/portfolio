<template>
  <button
    class="
      px-4
      py-2
      border border-burgundy
      dark:border-gold
      font-serif
      text-burgundy
      dark:text-gold
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
