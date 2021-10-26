<template>
  <article class="flex flex-col">
    <div
      class="
        lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:items-center
        md:mx-10
        lg:mx-0
      "
    >
      <div :class="projectImageClass">
        <div class="block lg:hidden text-center">
          <p
            class="
              text-burgundy
              dark:text-gold
              font-serif
              text-lg
              md:text-xl
              pb-3
            "
          >
            {{ projectType }}
          </p>
          <h3
            class="
              font-sans font-bold
              text-2xl
              pb-3
              uppercase
              text-black
              dark:text-white
            "
          >
            {{ project.name }}
          </h3>
        </div>
        <img
          :src="require(`~/assets/images/${project.id}.png`)"
          class="
            filter
            grayscale
            hover:grayscale-0
            transition
            duration-300
            sm:max-w-md sm:mx-auto
            lg:max-w-full lg:mx-0
            z-1
          "
          alt="intranet - login page"
        />
      </div>
      <div :class="projectContentContainerClass">
        <p
          class="
            hidden
            lg:block
            text-burgundy
            dark:text-gold
            font-serif
            text-lg
            md:text-xl
            pb-3
          "
        >
          {{ projectType }}
        </p>
        <h3
          class="
            hidden
            lg:block
            font-sans font-bold
            text-2xl
            pb-3
            uppercase
            text-black
            dark:text-white
          "
        >
          {{ project.name }}
        </h3>
        <p
          class="
            font-sans
            text-black
            dark:text-white
            lg:bg-light-gray lg:dark:bg-dark-gray
            relative
            my-8
            text-justify
            lg:my-0 lg:p-6
            z-10
          "
        >
          {{ project.description }}
        </p>
        <ul
          class="flex justify-center mt-3"
          :class="{
            'lg:justify-end': position % 2,
            'lg:justify-start': !(position % 2),
          }"
        >
          <li
            v-for="tech in project.stack"
            :key="tech.id"
            class="font-sans font-semibold text-lg text-gray px-4 lg:px-0"
            :class="{ 'lg:pl-6': position % 2, 'lg:pr-6': !(position % 2) }"
          >
            {{ tech }}
          </li>
        </ul>

        <div
          v-if="project.links"
          class="flex justify-center mt-6"
          :class="{
            'lg:justify-end': position % 2,
            'lg:justify-start': !(position % 2),
          }"
        >
          <primary-button
            v-if="project.links.site"
            text="Voir site"
            :class="{
              'mr-6': !(position % 2),
            }"
          />
          <secondary-button
            v-if="project.links.github"
            text="Github"
            :class="{
              'ml-6': position % 2,
            }"
          />
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import PrimaryButton from './Base/PrimaryButton.vue'
import SecondaryButton from './Base/SecondaryButton.vue'

export default {
  name: 'ProjectCard',
  components: {
    PrimaryButton,
    SecondaryButton,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  computed: {
    projectType() {
      return `Project ${
        this.project.type === 'solo' ? 'personnel' : 'en équipe'
      }`
    },
    projectImageClass() {
      return {
        'lg:row-start-1 lg:row-end-1': true,
        'lg:col-start-1 lg:col-end-7': this.position % 2,
        'lg:col-start-7 lg:col-end-13': !(this.position % 2),
      }
    },
    projectContentContainerClass() {
      return {
        'lg:row-start-1 lg:row-end-1': true,
        'lg:col-start-6 lg:col-end-13 text-right': this.position % 2,
        'lg:col-start-1 lg:col-end-8 text-left': !(this.position % 2),
      }
    },
  },
}
</script>
