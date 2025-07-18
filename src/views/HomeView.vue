<script setup lang="ts">
import profileImage from '@/assets/images/MY_PROFILE.jpg' // Use the correct alias to load the image
</script>

<template>
  <v-container fluid class="py-12 px-4 px-md-8 home-container">
    <v-row align="center" justify="center">
      <!-- Left Text Column -->
      <v-col cols="12" md="6" class="text-left">
        <h1 class="text-h2 font-weight-bold mb-4">
          Hi, I'm <span class="gradient-text">Raheem</span>
        </h1>
        <p class="text-h6 text-grey-lighten-1">
          Software Developer — I build modern apps using Vue, Django, Flutter
        </p>
      </v-col>

      <!-- Right Image Column -->
      <v-col cols="12" md="6" class="text-center">
        <v-avatar size="200" class="profile-avatar">
          <v-img
            :src="profileImage"
            alt="Profile Picture"
            cover
          ></v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.home-container {
  background: #121212;
}

.gradient-text {
  background: linear-gradient(50deg, #ed05e9, #3b3fc2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.profile-avatar {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1) !important;
}
</style>
