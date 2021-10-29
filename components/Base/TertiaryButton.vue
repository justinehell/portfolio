<template>
  <NuxtLink
    :to="{ path: '/', hash: `#${hash}` }"
    class="font-serif text-color text-lg transition-colors duration-300 link"
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
