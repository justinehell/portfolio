<template>
  <section
    id="about"
    class="flex flex-col justify-center min-h-screen pt-28 md:pt-0"
  >
    <h2 class="section-title text-color--accent after-bg-color--accent">
      A propos
    </h2>
    <div class="flex flex-col items-start md:flex-row mt-7">
      <div class="md:w-2/3 text-justify md:text-left md:mr-7">
        <p class="font-sans text-color text-base lg:text-lg mb-4">
          Après un parcours scientifique, j'ai décidé de m'orienter vers un
          domaine plus dynamique qui me correspond mieux. De nature
          <span class="text-color--accent font-bold">curieuse</span>
          et
          <span class="text-color--accent font-bold">créative</span>, j'ai tout
          de suite été fascinée par les possibilités qu'offre le Développement
          Web, notamment
          <span class="text-color--accent font-bold">Front-End</span>. J'aime le
          <span class="text-color--accent font-bold">travail d'équipe</span>
          pour l'échange d'idées mais je sais aussi être
          <span class="text-color--accent font-bold">autonome</span>.
          <span class="text-color--accent font-bold">Flexible</span>, je saurai
          m'adapter et m'intégrer rapidement.
        </p>

        <p class="font-sans text-color text-base lg:text-lg mb-4">
          Les technologies avec lesquelles j'ai travaillé :
        </p>

        <ul class="font-sans text-color text-base lg:text-lg mb-4">
          <li v-for="(skill, i) in skills" :key="i">
            <span class="text-color--accent font-bold">
              <icon-check />
            </span>
            {{ skill }}
          </li>
        </ul>

        <p class="font-sans text-color text-base lg:text-lg mb-4">
          Je me forme actuellement sur :
        </p>

        <ul class="font-sans text-color text-base lg:text-lg mb-4">
          <li v-for="(learningSkill, i) in learningSkills" :key="i">
            <span class="text-color--accent font-bold">
              <icon-check />
            </span>
            {{ learningSkill }}
          </li>
        </ul>
      </div>
      <div
        class="
          relative
          my-10
          mx-auto
          md:mt-0 md:mx-0
          after-border-color--accent
          after:w-full after:h-full after:absolute after:top-5 after:left-5
          hover:after:top-3 hover:after:left-3
          after:transition-all after:duration-300
          hover:after:transition-all hover:after:duration-300
          after:z-1
        "
      >
        <img
          src="~/assets/images/b&w.jpg"
          class="relative z-10"
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
            z-10
          "
          alt="Justine Hell - by Joz' ma vie"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      skills: [
        'Écosystème VueJS ( Vuex / Pinia / VueRouter / Vuetify / Quasar )',
        'HTML / CSS / Javascript (ES6+)',
        'Strapi / Sanity (headless CMS)',
        'Git / Github',
        'Méthodes Agiles / Scrum',
      ],
      learningSkills: ['JavaScript Testing Framework - Jest / Cypress'],
    }
  },
}
</script>
