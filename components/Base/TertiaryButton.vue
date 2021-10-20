<template>
  <NuxtLink
    :to="to"
    class="
      font-serif
      text-lg text-black
      dark:text-white
      transition-colors
      duration-300
      link
    "
  >
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'TertiaryButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
