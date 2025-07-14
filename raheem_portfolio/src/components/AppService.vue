<template>
  <v-container fluid class="services-container py-16 px-4 px-md-12">
    <h2 class="text-h4 font-weight-bold mb-8 text-primary text-center">What I Do</h2>
    <v-row justify="center" align="stretch" dense>
      <v-col cols="12" sm="6" md="4" v-for="service in services" :key="service.title">
        <v-card class="service-card pa-6" elevation="3" rounded="lg" hover>
          <v-icon size="48" color="primary" class="mb-4">{{ service.icon }}</v-icon>
          <h3 class="text-h6 font-weight-medium mb-2">{{ service.title }}</h3>
          <p class="text-body-2 text-grey-lighten-1">{{ service.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Frontend Development',
    icon: 'mdi-code-braces',
    description: 'Building responsive, user-friendly web interfaces with Vue.js',
  },
  {
    title: 'Backend Development',
    icon: 'mdi-server',
    description: 'Creating scalable APIs and services using Django,GraphQL and Rest API',
  },
  {
    title: 'Mobile Development',
    icon: 'mdi-cellphone',
    description: 'Developing cross-platform mobile apps with Flutter.',
  },
];
</script>

<style scoped>
.services-container {
  background-color: #121212;
  color: #fff;
}
.service-card {
  background: #1e1e1e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(255, 255, 255, 0.12);
}
</style>
