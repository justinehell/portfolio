<template>
  <header class="py-8 px-12">
    <nav class="flex justify-between items-center">
      <div>
        <the-logo />
      </div>

      <div class="hidden sm:flex justify-center items-center">
        <tertiary-button to="/" text="A propos" class="mx-2 md:mx-6" />
        <tertiary-button to="/" text="Projets" class="mx-2 md:mx-6" />
        <tertiary-button to="/" text="Contact" class="mx-2 md:mx-6" />
        <secondary-button text="Mon CV" class="mx-2 md:mx-6" />
      </div>

      <dark-mode-button class="hidden sm:block" />

      <!-- Menu Burger Button -->
      <div
        class="
          block
          sm:hidden
          border border-burgundy
          dark:border-gold
          transition
          duration-300
        "
      >
        <button
          class="
            items-center
            justify-center
            p-1
            h-9
            w-9
            relative
            overflow-hidden
          "
          @click="handleSideMenu"
        >
          <span class="h-9 w-9 absolute inset-0">
            <burger-menu-icon />
          </span>
        </button>
      </div>

      <!-- Side Nav Bar -->
      <div
        class="
          w-full
          sm:hidden
          flex flex-col
          fixed
          h-screen
          inset-0
          bg-white
          dark:bg-black
          transition
          duration-300
        "
        :style="sideMenuStyle"
      >
        <button
          class="my-8 mx-12 border border-burgundy dark:border-gold self-end"
          @click="handleSideMenu"
        >
          <close-icon />
        </button>

        <div
          class="
            mt-8
            flex
            justify-between
            items-center
            flex-col
            text-center
            w-full
          "
        >
          <tertiary-button to="/" text="A propos" class="my-4" />
          <tertiary-button to="/" text="Projets" class="my-4" />
          <tertiary-button to="/" text="Contact" class="my-4" />
          <secondary-button text="Mon CV" class="my-4" />
        </div>

        <div
          class="w-9/12 mx-auto mt-6 border-t border-black dark:border-white"
        ></div>

        <dark-mode-button class="self-center mt-8" />
      </div>
    </nav>
  </header>
</template>

<script>
import SecondaryButton from './Base/SecondaryButton.vue'
import TertiaryButton from './Base/TertiaryButton.vue'
import DarkModeButton from './DarkModeButton.vue'
import CloseIcon from './Icons/Close.vue'
import BurgerMenuIcon from './Icons/BurgerMenu.vue'
import TheLogo from './TheLogo.vue'

export default {
  name: 'TheHeader',
  components: {
    SecondaryButton,
    TertiaryButton,
    TheLogo,
    DarkModeButton,
    CloseIcon,
    BurgerMenuIcon,
  },
  data() {
    return {
      showSideMenu: false,
    }
  },
  computed: {
    sideMenuStyle() {
      return {
        boxShadow: `-10px 0px 30px -15px ${
          this.$colorMode.value === 'light'
            ? 'rgba(0, 0, 0, 0.4)'
            : 'rgba(255, 255, 255, 0.4)'
        }`,
        transform: this.showSideMenu ? 'translateX(0vw)' : 'translateX(110vw)',
      }
    },
  },
  methods: {
    handleSideMenu() {
      this.showSideMenu = !this.showSideMenu
      document.querySelector('body').style.overflowY = this.showSideMenu
        ? 'hidden'
        : 'scroll'
    },
  },
}
</script>
