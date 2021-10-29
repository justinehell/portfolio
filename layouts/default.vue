<template>
  <div class="bg-color">
    <the-header />
    <main class="mx-8 xs:mx-12 sm:mx-24">
      <Nuxt class="max-w-screen-md md:max-w-screen-lg mx-auto" />
    </main>

    <!-- left side Social Bar -->
    <div class="fixed bottom-0 left-10 hidden sm:block">
      <ul
        class="
          after:block after:w-px
          after-bg-color--accent
          after:h-20 after:m-auto
        "
      >
        <li class="py-3">
          <github-icon />
        </li>
        <li class="py-3">
          <linked-in-icon />
        </li>
        <li class="py-3 mb-6">
          <instagram-icon />
        </li>
      </ul>
    </div>

    <!-- right side Email -->
    <div class="fixed bottom-0 right-10 hidden sm:block w-5">
      <div
        class="
          after:block after:w-px
          after-bg-color--accent
          after:h-20 after:m-auto
        "
      >
        <a
          href="mailto:hell.justine@gmail.com"
          class="
            tracking-widest
            mb-6
            text-color--accent
            relative
            bottom-0
            hover:bottom-1
            transition-all
            duration-300
          "
          style="writing-mode: vertical-rl"
        >
          hell.justine@gmail.com
        </a>
      </div>
    </div>
    <the-footer />
  </div>
</template>
<script>
import TheFooter from '~/components/TheFooter.vue'
import GithubIcon from '~/components/Icons/Github.vue'
import InstagramIcon from '~/components/Icons/Instagram.vue'
import LinkedInIcon from '~/components/Icons/LinkedIn.vue'

export default {
  components: {
    GithubIcon,
    InstagramIcon,
    LinkedInIcon,
    TheFooter,
  },
}
</script>
