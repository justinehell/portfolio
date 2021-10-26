<template>
  <section class="flex flex-col justify-center" style="min-height: 100vh">
    <section-title title="Projets" class="mx-auto" />
    <project-card
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :position="index + 1"
      class="mt-7"
      :class="{ 'mb-20 lg:mb-28': index !== projects.length - 1 }"
    />
  </section>
</template>
<script>
import SectionTitle from './Base/Title.vue'

export default {
  name: 'Projects',
  components: {
    SectionTitle,
  },
  data() {
    return {
      projects: null,
    }
  },
  async fetch() {
    this.projects = await this.$content('projects')
      // .where({ type: 'solo' })
      .fetch()
  },
}
</script>
