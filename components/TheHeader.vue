<template>
  <header
    class="py-6 px-8 xs:px-12 fixed w-full bg-color--transparent top-0 z-30"
    :style="headerStyle"
  >
    <nav class="flex justify-between items-center">
      <the-logo />

      <div class="hidden sm:flex justify-center items-center">
        <tertiary-button hash="about" text="A propos" class="mx-2 md:mx-6" />
        <tertiary-button hash="projects" text="Projets" class="mx-2 md:mx-6" />
        <tertiary-button hash="contact" text="Contact" class="mx-2 md:mx-6" />
        <secondary-button
          text="Mon CV"
          link="/CV_Justine_Hell.pdf"
          class="mx-2 md:mx-6"
        />
      </div>

      <dark-mode-button class="hidden sm:block" />

      <!-- Menu Burger Button -->
      <div class="block sm:hidden border-color--accent transition duration-300">
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
          bg-color
          transition
          duration-300
          z-30
        "
        :style="sideMenuStyle"
      >
        <button
          class="my-6 mx-12 border-color--accent self-end"
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
          <tertiary-button
            hash="about"
            text="A propos"
            class="my-4"
            @close="handleSideMenu"
          />
          <tertiary-button
            hash="projects"
            text="Projets"
            class="my-4"
            @close="handleSideMenu"
          />
          <tertiary-button
            hash="contact"
            text="Contact"
            class="my-4"
            @close="handleSideMenu"
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

const HEADER_OFFSET = 98
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
      showNavbar: true,
      lastScrollPosition: 0,
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
    headerStyle() {
      return {
        transform: !this.showNavbar
          ? 'translate3d(0, -110%, 0)'
          : 'translate3d(0, 0, 0)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        transition: '0.2s all ease-out',
      }
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    handleSideMenu() {
      this.showSideMenu = !this.showSideMenu
      document.querySelector('body').style.overflowY = this.showSideMenu
        ? 'hidden'
        : 'scroll'
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) < HEADER_OFFSET
      ) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  },
}
</script>
