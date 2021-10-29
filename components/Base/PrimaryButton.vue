<template>
  <a
    :href="link"
    target="_blank"
    class="btn after-border-color--accent before-bg-color--accent"
  >
    <span
      class="font-serif text-color--reverse text-lg inline-block relative"
      >{{ text }}</span
    >
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
