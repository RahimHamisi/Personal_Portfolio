<template>
  <v-container fluid class="about-container py-16 px-4 px-md-12">
    <v-row align="center" justify="center" class="flex-wrap-reverse">
      <v-col cols="12" md="6">
        <h2 class="text-h3 font-weight-bold mb-4 text-primary">
          About Me
        </h2>
        <p class="text-body-1 text-grey-lighten-1 mb-6">
          I'm a passionate developer experienced in building scalable web and mobile applications. I love turning ideas into real digital solutions using modern frameworks.
        </p>
        <AppSkills />
        <AppExperience />
        <AppServices />
      </v-col>

      <v-col cols="12" md="6" class="text-center mb-8 mb-md-0">
        <v-img
          src="/about-image.svg"
          alt="Developer illustration"
          width="100%"
          max-width="400"
          class="mx-auto"
          cover
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import AppExperience from '@/components/AppExperience.vue';
import AppServices from '@/components/AppService.vue'
import AppSkills from '@/components/AppSkills.vue';

</script>

<style scoped>
.about-container {
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
}
</style>
