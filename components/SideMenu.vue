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
    <button class="my-6 mx-12 border-color--accent self-end" @click="closeMenu">
      <close-icon />
    </button>

    <div
      class="mt-8 flex justify-between items-center flex-col text-center w-full"
    >
      <tertiary-button
        hash="about"
        text="A propos"
        class="my-4"
        @click.native="closeMenu"
      />
      <tertiary-button
        hash="projects"
        text="Projets"
        class="my-4"
        @click.native="closeMenu"
      />
      <tertiary-button
        hash="contact"
        text="Contact"
        class="my-4"
        @click.native="closeMenu"
      />
      <secondary-button
        text="Mon CV"
        link="/CV_Justine_Hell.pdf"
        class="my-4"
      />
    </div>

    <div
      class="w-9/12 mx-auto mt-6 border-t border-black dark:border-white"
    ></div>

    <dark-mode-button class="self-center mt-8" />
  </div>
</template>

<script>
import SecondaryButton from './Base/SecondaryButton.vue'
import TertiaryButton from './Base/TertiaryButton.vue'
import DarkModeButton from './DarkModeButton.vue'
import CloseIcon from './Icons/Close.vue'

export default {
  name: 'SideMenu',
  components: {
    SecondaryButton,
    TertiaryButton,
    DarkModeButton,
    CloseIcon,
  },
  props: {
    sideMenuStyle: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeMenu() {
      this.$emit('menu:close')
    },
  },
}
</script>
