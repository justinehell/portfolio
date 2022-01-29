<template>
  <div :class="containerClass">
    <tertiary-button
      hash="about"
      text="A propos"
      :class="buttonClass"
      @click.native="$emit('click')"
    />
    <tertiary-button
      hash="projects"
      text="Projets"
      :class="buttonClass"
      @click.native="$emit('click')"
    />
    <tertiary-button
      hash="contact"
      text="Contact"
      :class="buttonClass"
      @click.native="$emit('click')"
    />
    <secondary-button
      text="Mon CV"
      link="/CV_Justine_Hell.pdf"
      :class="buttonClass"
    />
  </div>
</template>
<script>
export default {
  name: 'NavLinks',
  props: {
    sideMenu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    containerClass() {
      return [
        this.sideMenu
          ? 'mt-8 flex justify-between items-center flex-col text-center w-full'
          : 'hidden sm:flex justify-center items-center',
      ]
    },
    buttonClass() {
      return [this.sideMenu ? 'my-4' : 'mx-2 md:mx-6']
    },
  },
}
</script>
