<template>
  <section id="contact" class="flex flex-col justify-center min-h-screen">
    <h2
      class="
        section-title
        text-color--accent
        after-bg-color--accent
        justify-center
      "
    >
      Contact
    </h2>
    <div class="flex flex-col mt-7">
      <h2
        class="
          font-sans
          text-color text-3xl
          md:text-4xl
          lg:text-6xl
          font-bold
          text-center
        "
      >
        Prenons un temps d'échange
      </h2>
      <p
        class="font-sans text-color text-lg my-8 max-w-lg mx-auto text-justify"
      >
        Bien que je ne recherche actuellement pas de nouvelle opportunité, ma
        boîte mail est toujours ouverte. Que vous ayez une question ou que vous
        vouliez simplement dire bonjour, je ferai de mon mieux pour vous
        répondre !
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
export default {
  name: 'Contact',
}
</script>
