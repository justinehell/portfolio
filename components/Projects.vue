<template>
  <section
    id="projects"
    class="flex flex-col justify-center min-h-screen pt-28"
  >
    <h2 class="section-title justify-center">Projets</h2>
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
export default {
  name: 'Projects',
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
