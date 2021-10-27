<template>
  <component
    v-bind="linkProps"
    :is="'SecondaryButton'"
    class="
      px-4
      py-2
      border border-burgundy
      dark:border-gold
      font-serif
      text-lg text-burgundy
      dark:text-gold
      transition-colors
      duration-300
    "
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
export default {
  name: 'SecondaryButton',
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
  computed: {
    // JH - 27/10/2021 - https://stackoverflow.com/questions/56246712/how-add-a-href-inside-nuxt-link
    linkProps() {
      if (this.link.match(/^(http(s)?):\/\//) || this.link.match(/^\/[\w]*/)) {
        return {
          is: 'a',
          href: this.link,
          target: '_blank',
          rel: 'noopener',
        }
      }
      return {
        is: 'nuxt-link',
        to: `#${this.link}`,
      }
    },
  },
}
</script>
