<template>
  <h2
    class="
      font-serif
      whitespace-nowrap
      text-burgundy
      dark:text-gold
      text-2xl
      md:text-3xl
      flex
      items-center
      relative
      after:bg-burgundy
      dark:after:bg-gold
      after:relative after:w-full
      md:after:w-80
      after:h-px after:ml-7
    "
  >
    {{ title }}
  </h2>
</template>
<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
