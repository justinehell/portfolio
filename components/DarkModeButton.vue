<template>
  <div class="border-color--accent transition-colors duration-300">
    <button class="h-12 w-12 p-1 relative overflow-hidden" @click="toggleMode">
      <span
        class="icon-container"
        :class="darkModeClass"
        style="transform-origin: 50% 100px"
      >
        <moon-icon />
      </span>
      <span
        class="icon-container"
        :class="lightModeClass"
        style="transform-origin: 50% 100px"
      >
        <sun-icon />
      </span>
    </button>
  </div>
</template>
<script>
import SunIcon from './Icons/Sun.vue'
import MoonIcon from './Icons/Moon.vue'
export default {
  name: 'DarkModeButton',
  components: {
    SunIcon,
    MoonIcon,
  },
  computed: {
    darkModeClass() {
      const darkModeOn = this.$colorMode.value === 'dark'
      return {
        '-rotate-45': darkModeOn,
        'rotate-0': !darkModeOn,
      }
    },
    lightModeClass() {
      const lightModeOn = this.$colorMode.value === 'light'
      return {
        'rotate-45': lightModeOn,
        'rotate-0': !lightModeOn,
      }
    },
  },
  methods: {
    toggleMode() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
}
</script>
