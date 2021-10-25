<template>
  <span class="text-burgundy dark:text-gold font-semibold"> {{ text }}</span>
</template>
<script>
export default {
  name: 'Span',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
