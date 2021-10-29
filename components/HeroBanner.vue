<template>
  <section class="flex flex-col justify-center min-h-screen">
    <p class="font-serif text-color--accent text-lg md:text-xl py-4">
      Salut, moi c'est
    </p>
    <h1 class="font-sans text-color text-3xl md:text-4xl lg:text-6xl font-bold">
      Justine Hell.
    </h1>
    <h2 class="font-sans text-color text-3xl md:text-4xl lg:text-6xl font-bold">
      Développeuse VueJS Junior.
    </h2>
    <p
      class="text-color font-sans text-md md:text-xl py-4 max-w-xl md:max-w-2xl"
    >
      Créative et curieuse, j'aime apprendre de nouvelles choses. Je suis
      fascinée de jour en jour par les possibilités du développement web
      Front-end.
    </p>
    <div class="flex mt-7">
      <primary-button
        text="Contact"
        link="mailto:hell.justine@gmail.com"
        class="mr-14"
      />
      <secondary-button text="Projets" link="projects" class="" />
    </div>
  </section>
</template>

<script>
import PrimaryButton from './Base/PrimaryButton.vue'
import SecondaryButton from './Base/SecondaryButton.vue'
export default {
  name: 'HeroBanner',
  components: { PrimaryButton, SecondaryButton },
}
</script>
