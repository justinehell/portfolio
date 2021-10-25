<template>
  <section class="flex flex-col justify-center" style="min-height: 100vh">
    <section-title title="A propos" />
    <div class="flex flex-col items-start md:flex-row mt-7">
      <div class="md:w-2/3 mr-7">
        <p class="font-sans text-lg text-black dark:text-white mb-4">
          Après un parcours scientifique, j'ai décidé de m'orienter vers un
          domaine plus dynamique qui me correspond mieux. De nature
          <span class="text-burgundy dark:text-gold font-semibold"
            >curieuse</span
          >
          et
          <span class="text-burgundy dark:text-gold font-semibold"
            >créative</span
          >, j'ai tout de suite été fascinée par les possibilités qu'offre le
          Développement Web, notamment
          <span class="text-burgundy dark:text-gold font-semibold"
            >Front-End</span
          >. J'aime le
          <span class="text-burgundy dark:text-gold font-semibold"
            >travail d'équipe</span
          >
          pour l'échange d'idées mais je sais aussi être
          <span class="text-burgundy dark:text-gold font-semibold"
            >autonome</span
          >.
          <span class="text-burgundy dark:text-gold font-semibold"
            >Flexible</span
          >, je saurai m'adapter et m'intégrer rapidement.
        </p>

        <p class="font-sans text-lg text-black dark:text-white mb-4">
          Les technologies avec lesquelles j'ai travaillé :
        </p>

        <ul class="font-sans text-lg text-black dark:text-white mb-4">
          <li>
            <span class="text-burgundy dark:text-gold font-semibold">✔</span>
            Écosystème VueJS ( VueX / VueRouter / Vuetify )
          </li>
          <li>
            <span class="text-burgundy dark:text-gold font-semibold">✔</span>
            HTML / CSS / Javascript (ES6+)
          </li>
          <li>
            <span class="text-burgundy dark:text-gold font-semibold">✔</span>
            Strapi / Sanity (headless CMS)
          </li>
          <li>
            <span class="text-burgundy dark:text-gold font-semibold">✔</span>
            Git / Github
          </li>
          <li>
            <span class="text-burgundy dark:text-gold font-semibold">✔</span>
            Méthodes Agiles / Scrum
          </li>
        </ul>

        <p class="font-sans text-lg text-black dark:text-white mb-4">
          Je me forme actuellement sur :
        </p>

        <ul class="font-sans text-lg text-black dark:text-white mb-4">
          <li>
            <span class="text-burgundy dark:text-gold font-semibold">✔</span>
            NuxtJS
          </li>
          <li>
            <span class="text-burgundy dark:text-gold font-semibold">✔</span>
            JavaScript Testing Framework - Jest / Cypress
          </li>
        </ul>
      </div>
      <div
        class="
          relative
          my-10
          mx-auto
          md:mt-0 md:mx-0
          after:border after:border-burgundy
          dark:after:border-gold
          after:w-full after:h-full after:absolute after:top-5 after:left-5
          hover:after:top-3 hover:after:left-3
          after:transition-all after:duration-300
          hover:after:transition-all hover:after:duration-300
          after:z-1
        "
      >
        <img
          src="~/assets/images/b&w.jpg"
          class="relative"
          style="z-index: 2"
          alt="Justine Hell - by Joz' ma vie"
        />
        <img
          src="~/assets/images/colored.jpg"
          class="
            opacity-0
            absolute
            top-0
            left-0
            hover:opacity-100 hover:filter hover:saturate-75
            transition-all
            duration-300
          "
          style="z-index: 2"
          alt="Justine Hell - by Joz' ma vie"
        />
      </div>
    </div>
  </section>
</template>
<script>
import SectionTitle from './Base/Title.vue'
export default {
  name: 'About',
  components: {
    SectionTitle,
  },
}
</script>
