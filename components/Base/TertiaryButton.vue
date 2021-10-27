<template>
  <NuxtLink
    :to="{ path: '/', hash: `#${hash}` }"
    class="
      font-serif
      text-lg text-black
      dark:text-white
      transition-colors
      duration-300
      link
    "
    @click.native="$emit('close')"
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
    hash: {
      type: String,
      required: true,
    },
  },
}
</script>
