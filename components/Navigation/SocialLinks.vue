<template>
  <ul :class="listClass">
    <li :class="horizontal ? 'px-3' : 'py-3'">
      <icon-github />
    </li>
    <li :class="horizontal ? 'px-3' : 'py-3'">
      <icon-linked-in />
    </li>
    <li :class="horizontal ? 'px-3' : 'py-3 mb-6'">
      <icon-codepen />
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SocialLinks',
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listClass() {
      return [
        this.horizontal
          ? 'flex justify-center items-center mb-4'
          : 'after:block after:w-px after-bg-color--accent after:h-20 after:m-auto',
      ]
    },
  },
}
</script>
