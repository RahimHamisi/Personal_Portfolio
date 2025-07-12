<template>
  <v-container fluid class="py-12 px-4 px-md-8 about-container">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="about-card pa-6 pa-md-8" elevation="6" rounded="lg">
          <h2 class="text-h3 font-weight-bold mb-6 text-primary text-center">
            About Me
          </h2>
          <p class="text-body-1 text-grey-lighten-1 mb-8 text-center">
            I'm a passionate developer experienced with modern web and mobile tech.
          </p>
          <v-chip-group column class="justify-center">
            <v-chip
              v-for="skill in skills"
              :key="skill"
              color="primary"
              class="ma-2 skill-chip"
              variant="flat"
              rounded="lg"
            >
              {{ skill }}
            </v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const skills = [
  'Vue.js',
  'Vuetify',
  'Flutter',
  'Django',
  'GraphQL',
]
</script>

<style scoped>
.about-container {
  background: #121212;
}

.about-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #1e1e1e;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1) !important;
}

.skill-chip {
  font-weight: 500;
  transition: transform 0.2s ease;
}

.skill-chip:hover {
  transform: scale(1.05);
}
</style>