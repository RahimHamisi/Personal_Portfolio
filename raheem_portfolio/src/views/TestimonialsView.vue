<template>
  <v-container fluid class="testimonials-container py-16 px-4 px-md-12">
    <h2 class="text-h3 font-weight-bold mb-8 text-primary text-center">What Others Say</h2>
    <v-row justify="center" dense>
      <v-col
        cols="12"
        md="6"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <v-card class="testimonial-card pa-6" elevation="3" rounded="lg">
          <v-avatar size="56" class="mb-4">
            <v-img :src="testimonial.avatar" alt="Avatar" />
          </v-avatar>
          <p class="text-body-2 text-grey-lighten-1 mb-4">
            "{{ testimonial.text }}"
          </p>
          <h4 class="text-subtitle-1 font-weight-medium mb-0">
            {{ testimonial.name }}
          </h4>
          <p class="text-caption text-grey-lighten-2">{{ testimonial.role }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    name: '',
    role: '',
    text: '',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: '',
    role: '',
    text: '',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];
</script>

<style scoped>
.testimonials-container {
  background-color: #121212;
  color: #fff;
}

.testimonial-card {
  background: #1e1e1e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(255, 255, 255, 0.12);
}
</style>
