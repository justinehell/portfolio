<template>
  <section class="min-h-screen">
    <section-title title="A propos" />
    <div class="flex flex-col md:flex-row mt-7">
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
          <li>✔ Écosystème VueJS ( VueX / VueRouter / Vuetify )</li>
          <li>✔ HTML / CSS ou Javascript (ES6+)</li>
          <li>✔ Strapi / Sanity (headless CMS)</li>
          <li>✔ Git / Github</li>
          <li>✔ Méthodes Agiles / Scrum</li>
        </ul>

        <p class="font-sans text-lg text-black dark:text-white mb-4">
          Je me forme actuellement sur :
        </p>

        <ul class="font-sans text-lg text-black dark:text-white mb-4">
          <li>✔ NuxtJS</li>
          <li>✔ JavaScript Testing Framework - Jest, Cypress</li>
        </ul>
      </div>
      <div class="card mt-10 md:mt-0 mx-auto md:mx-0">
        <img
          src="~/assets/images/b&w.jpg"
          class="z-0"
          alt="Justine Hell - by Joz' ma vie"
        />
        <img
          src="~/assets/images/colored.jpg"
          class="card-image transition duration-300"
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
<style scoped>
.card {
  position: relative;
}
.card .card-image {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.card:hover .card-image {
  opacity: 1;
  transition: all 300ms;
  filter: saturate(75%);
}
</style>
