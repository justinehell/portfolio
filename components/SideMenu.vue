<template>
  <div
    class="
      w-full
      sm:hidden
      flex flex-col
      fixed
      h-screen
      inset-0
      bg-color
      transition
      duration-300
      z-30
    "
    :style="sideMenuStyle"
  >
    <button
      class="my-6 mx-12 border-color--accent self-end"
      @click="closeSideMenu"
    >
      <icon-close />
    </button>

    <nav-links side-menu @click="closeSideMenu" />

    <div
      class="w-9/12 mx-auto mt-6 border-t border-black dark:border-white"
    ></div>

    <dark-mode-button class="self-center mt-8" />
  </div>
</template>

<script>
import DarkModeButton from './DarkModeButton.vue'
import NavLinks from './Navigation/NavLinks.vue'

export default {
  name: 'SideMenu',
  components: {
    DarkModeButton,
    NavLinks,
  },
  props: {
    sideMenuStyle: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeSideMenu() {
      this.$emit('menu:close')
    },
  },
}
</script>
