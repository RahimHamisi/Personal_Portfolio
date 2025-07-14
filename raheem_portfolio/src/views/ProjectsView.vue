<template>
  <v-container fluid class="py-12 px-4 px-md-8 project-container">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h3 font-weight-bold mb-8 text-primary">My Projects</h2>
        <v-row>
          <v-col
            v-for="project in projects"
            :key="project.id"
            cols="12"
            sm="6"
            md="4"
            class="d-flex"
          >
            <v-card
              class="project-card d-flex flex-column"
              elevation="6"
              rounded="lg"
              hover
            >
              <v-img
                :src="project.image"
                height="200"
                cover
                class="rounded-t-lg"
                :alt="`${project.title} preview`"
              >
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
              <v-card-title class="text-h6 font-weight-medium py-4 text-grey-lighten-1">
                {{ project.title }}
              </v-card-title>
              <v-card-subtitle class="text-caption text-grey-lighten-1 pb-3">
                {{ project.stack }}
              </v-card-subtitle>
              <v-card-text class="flex-grow-1 text-body-2 text-grey-lighten-1">
                {{ project.description }}
              </v-card-text>
              <v-card-actions class="pa-4 pt-0">
                <v-btn
                  :href="project.link"
                  target="_blank"
                  icon
                  variant="text"
                  color="grey-lighten-1"
                  aria-label="View project on GitHub"
                >
                  <v-icon size="large">mdi-github</v-icon>
                </v-btn>
                <v-spacer />
                <v-btn
                  :href="project.demo"
                  target="_blank"
                  variant="flat"
                  color="primary"
                  rounded="md"
                  class="text-capitalize"
                >
                  Live Demo
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Public Open Space Application',
    description: "The mobile-Cross Platform Application for encouraging direct\
                 Citizen Participation in Reporting the illegal use of public open space",
    stack: 'Flutter, Django, GraphQL,Postgresql',
    image: 'https://source.unsplash.com/random/301x200?app',
    link: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing projects and skills.',
    stack: 'Vue, Vuetify',
    image: 'https://source.unsplash.com/random/302x200?website',
    link: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Upcoming Projects',
    description: 'My Coming New Projects will be here',
    stack: 'Not Thinked',
    image: 'https://source.unsplash.com/random/303x200?dashboard',
    link: '#',
    demo: '#',
  },
])
</script>

<style scoped>
.project-container {
  background: #121212;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #1e1e1e;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1) !important;
}

.v-img {
  transition: opacity 0.3s ease;
}

.v-img:hover {
  opacity: 0.95;
}
</style>