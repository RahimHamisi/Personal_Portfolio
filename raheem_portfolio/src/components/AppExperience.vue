<template>
  <v-container fluid class="experience-container py-16 px-4 px-md-12">
    <h2 class="text-h4 font-weight-bold mb-8 text-primary text-center"   v-animateonscroll="{ enterClass: 'fade-in-up', leaveClass: 'fade-out' }">Experience & Education</h2>
    <v-timeline align-top>
      <v-timeline-item
        v-for="item in timelineItems"
        :key="item.id"
        :color="item.color"
        small
         v-animateonscroll="{ 
            enterClass: 'fade-in-up', 
            leaveClass: 'fade-out' 
        }"
       
      >
        <template #icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </template>
        <div class="timeline-content" v-animateonscroll="{ enterClass: 'fade-in-up', leaveClass: 'fade-out' }">
          <h3 class="text-h6 font-weight-medium mb-1">{{ item.title }}</h3>
          <p class="text-caption text-grey-lighten-1 mb-2">{{ item.duration }}</p>
          <p class="text-body-2 text-grey-lighten-1">{{ item.description }}</p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup lang="ts">
const timelineItems = [
  {
    id: 1,
    title: 'BSc Information System and Management - Ardhi University',
    duration: '2022 - Present',
    description: 'Focusing on Development of software and Basics of Ai and ML.',
    icon: 'mdi-school',
    color: 'secondary',
  },
  {
    id: 2,
    title: 'Practical Training - e-Goverment Authority',
    duration: 'July 2024 - Oct 2024',
    description: 'Worked on backend API development with Django and GraphQL,and getting some basics of Flutter ,with Basics of ML and Artificial Intelligence',
    icon: 'mdi-briefcase',
    color: 'primary',
  },
];
</script>

<style scoped>
.experience-container {
  background-color: #121212;
  color: #fff;
}

.timeline-content {
  max-width: 480px;
}
</style>
