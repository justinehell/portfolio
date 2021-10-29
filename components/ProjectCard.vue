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
          <p class="font-serif text-color--accent text-lg md:text-xl pb-3">
            {{ projectType }}
          </p>
          <h3 class="font-sans text-color font-bold text-2xl pb-3 uppercase">
            {{ project.name }}
          </h3>
        </div>
        <a v-if="project.links.site" :href="project.links.site" target="_blank">
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
            :alt="project.name"
          />
        </a>
        <img
          v-else
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
          :alt="project.name"
        />
      </div>
      <div :class="projectContentContainerClass">
        <p
          class="
            hidden
            lg:block
            text-color--accent
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
            font-sans
            text-color
            font-bold
            text-2xl
            pb-3
            uppercase
          "
        >
          {{ project.name }}
        </h3>
        <p
          class="
            font-sans
            text-color text-base text-justify
            bg-color--gray
            py-3
            mt-5
            lg:p-6
            relative
            z-10
          "
        >
          {{ project.description }}
        </p>
        <ul :class="projectContentStackListClass">
          <li
            v-for="tech in project.stack"
            :key="tech.id"
            :class="projectContentStackItemClass"
          >
            {{ tech }}
          </li>
        </ul>

        <div v-if="project.links" :class="projectContentLinksClass">
          <primary-button
            v-if="project.links.site"
            text="Voir site"
            :link="project.links.site"
            :class="projectContentLinkSiteClass"
          />
          <secondary-button
            v-if="project.links.github"
            text="Github"
            :link="project.links.github"
            :class="projectContentLinkGithubClass"
          />
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'ProjectCard',
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
      return [
        'lg:row-start-1 lg:row-end-1',
        this.position % 2
          ? 'lg:col-start-1 lg:col-end-7'
          : 'lg:col-start-7 lg:col-end-13',
      ]
    },
    projectContentContainerClass() {
      return [
        'lg:row-start-1 lg:row-end-1',
        this.position % 2
          ? 'lg:col-start-6 lg:col-end-13 text-right'
          : 'lg:col-start-1 lg:col-end-8 text-left',
      ]
    },
    projectContentStackListClass() {
      return [
        'flex justify-center py-3 lg:pt-3 flex-wrap',
        this.position % 2 ? 'lg:justify-end' : 'lg:justify-start',
      ]
    },
    projectContentStackItemClass() {
      return [
        'font-sans font-semibold text-lg text-gray px-4 lg:px-0',
        this.position % 2 ? 'lg:pl-6' : 'lg:pr-6',
      ]
    },
    projectContentLinksClass() {
      return [
        'flex justify-center py-3 lg:py-0',
        this.position % 2 ? 'lg:justify-end' : 'lg:justify-start',
      ]
    },
    projectContentLinkSiteClass() {
      return ['mx-3 lg:mx-0', this.position % 2 ? '' : 'lg:mr-6']
    },
    projectContentLinkGithubClass() {
      return ['mx-3 lg:mx-0', this.position % 2 ? 'lg:ml-6' : '']
    },
  },
}
</script>
