<template>
  <section
    id="projects"
    class="flex flex-col justify-center min-h-screen pt-28"
  >
    <h2
      class="
        section-title
        text-color--accent
        after-bg-color--accent
        justify-center
      "
    >
      Projets
    </h2>

    <div class="mx-auto my-6">
      <ul class="flex flex-wrap">
        <li
          v-for="tab in tabList"
          :key="tab.type"
          class="px-4"
          :class="{
            ' text-color--accent': tab.type === activeTab,
          }"
        >
          <label
            :for="tab.type"
            class="
              cursor-pointer
              inline-block
              uppercase
              mb-3
              relative
              font-semibold
              text-sans text-color
            "
            :class="{
              'text-color--accent after:absolute after-bg-color--accent after:w-full after:h-0.5 after:-bottom-1.5 after:left-0':
                tab.type === activeTab,
            }"
            >{{ tab.label }}</label
          >
          <input
            :id="tab.type"
            v-model="activeTab"
            :value="tab.type"
            type="radio"
            :name="tab.type"
            class="hidden"
          />
        </li>
      </ul>
    </div>

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
      tabList: [
        { label: 'Tous', type: 'all' },
        { label: 'Personnel', type: 'solo' },
        { label: 'Équipe', type: 'team' },
      ],
      activeTab: 'all',
    }
  },
  async fetch() {
    await this.getProjects()
  },
  watch: {
    async activeTab(val) {
      if (['solo', 'team'].includes(val)) {
        await this.getProjects({ type: val })
      } else {
        await this.getProjects()
      }
    },
  },
  methods: {
    async getProjects(filter = {}) {
      this.projects = await this.$content('projects')
        .sortBy('startDate', 'desc')
        .where(filter)
        .fetch()
    },
  },
}
</script>
