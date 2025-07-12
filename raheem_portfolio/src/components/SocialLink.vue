```vue
<template>
  <v-container fluid class="py-8 px-4 px-md-8 social-container">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="social-card pa-6 pa-md-8" elevation="6" rounded="lg">
          <h2 class="text-h3 font-weight-bold mb-6 text-primary text-center">
            Connect With Me
          </h2>
          <v-row justify="center" class="social-icons">
            <v-tooltip
              v-for="social in socialLinks"
              :key="social.name"
              :text="social.name"
              location="top"
            >
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  :href="social.link"
                  target="_blank"
                  icon
                  variant="text"
                  color="grey-lighten-1"
                  class="mx-2 social-btn"
                  :aria-label="`Visit my ${social.name} profile`"
                >
                  <v-icon size="x-large">{{ social.icon }}</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    link: 'https://www.facebook.com/yourprofile', // Replace with your actual profile link
  },
  {
    name: 'GitHub',
    icon: 'mdi-github',
    link: 'https://github.com/yourprofile', // Replace with your actual profile link
  },
  {
    name: 'Instagram',
    icon: 'mdi-instagram',
    link: 'https://www.instagram.com/yourprofile', // Replace with your actual profile link
  },
  {
    name: 'LinkedIn',
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/yourprofile', // Replace with your actual profile link
  },
]
</script>

<style scoped>
.social-container {
  background: #121212;
}

.social-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #1e1e1e;
}

.social-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1) !important;
}

.social-btn {
  transition: transform 0.2s ease, color 0.2s ease;
}

.social-btn:hover {
  transform: scale(1.1);
  color: #0288d1 !important;
}
</style>