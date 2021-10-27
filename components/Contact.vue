<template>
  <section id="contact" class="flex flex-col justify-center min-h-screen">
    <section-title title="Contact" class="justify-center" />
    <div class="flex flex-col mt-7">
      <h2
        class="
          text-black
          dark:text-white
          font-sans
          text-3xl
          md:text-4xl
          lg:text-6xl
          font-bold
          text-center
        "
      >
        Prenons un temps d'échange
      </h2>
      <p
        class="
          font-sans
          text-lg text-black
          dark:text-white
          my-8
          max-w-lg
          mx-auto
          text-justify
        "
      >
        Actuellement à la recherche de nouvelles opportunités, je suis
        disponible pour échanger si vous souhaitez plus d’informations.
      </p>
      <primary-button
        text="Me contacter"
        link="mailto:hell.justine@gmail.com"
        class="self-center"
      />
    </div>
  </section>
</template>
<script>
import PrimaryButton from './Base/PrimaryButton.vue'
import SectionTitle from './Base/Title.vue'
export default {
  name: 'Contact',
  components: {
    SectionTitle,
    PrimaryButton,
  },
}
</script>
