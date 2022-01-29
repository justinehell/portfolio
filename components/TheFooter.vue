<template>
  <footer class="py-2">
    <div class="block sm:hidden">
      <social-links horizontal />
    </div>
    <p class="text-color--accent text-center">
      Fait avec ❤️ par
      <a href="https://github.com/justinehell" class="link" target="_blank"
        >Justine Hell</a
      >
    </p>
  </footer>
</template>
<script>
import SocialLinks from './Navigation/SocialLinks.vue'
export default {
  name: 'TheFooter',
  components: { SocialLinks },
}
</script>
