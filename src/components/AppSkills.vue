<template>
  <v-chip-group column class="d-flex flex-wrap mb-6"  v-animateonscroll="{ enterClass: 'fade-in-up' }">
    <v-chip
      v-for="skill in skills"
      :key="skill"
      class="ma-2 skill-chip"
      color="primary"
      variant="flat"
      rounded="lg"
    >
      {{ skill }}
    </v-chip>
  </v-chip-group>
</template>

<script setup lang="ts">
const skills = ['Vue.js', 'Flutter', 'Django', 'GraphQL','RestAPI', 'PostgreSQL']
</script>

<style scoped>
.skill-chip {
  font-weight: 500;
  transition: transform 0.2s ease;
}
.skill-chip:hover {
  transform: scale(1.05);
}
</style>
