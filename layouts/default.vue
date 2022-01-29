<template>
  <div class="bg-color">
    <the-header />
    <main class="mx-8 xs:mx-12 sm:mx-24">
      <Nuxt class="max-w-screen-md md:max-w-screen-lg mx-auto" />
    </main>

    <!-- left side vertical Social Bar -->
    <div class="fixed bottom-0 left-10 hidden sm:block">
      <SocialLinks />
    </div>

    <!-- right side vertical Email -->
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
import SocialLinks from '~/components/Navigation/SocialLinks.vue'

export default {
  components: {
    TheFooter,
    SocialLinks,
  },
}
</script>
