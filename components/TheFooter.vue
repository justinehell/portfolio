<template>
  <footer class="py-2">
    <div class="block sm:hidden">
      <ul class="flex justify-center items-center mb-4">
        <li class="px-3">
          <github-icon />
        </li>
        <li class="px-3">
          <linked-in-icon />
        </li>
        <li class="px-3">
          <instagram-icon />
        </li>
      </ul>
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
import GithubIcon from '../components/Icons/Github.vue'
import LinkedInIcon from '../components/Icons/LinkedIn.vue'
import InstagramIcon from '../components/Icons/Instagram.vue'

export default {
  name: 'TheFooter',
  components: { GithubIcon, LinkedInIcon, InstagramIcon },
}
</script>
