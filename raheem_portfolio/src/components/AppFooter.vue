<template>
  <v-footer class="footer-container pa-12" app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h4 class="text-h6 text-white mb-4">About Me</h4>
          <p class="text-body-2 text-grey-lighten-1">
            I'm a full-stack developer passionate about building web and mobile apps. I focus on Building and solving Real world problem using software.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <h4 class="text-h6 text-white mb-4">Quick Links</h4>
          <v-list density="compact" class="bg-transparent">
            <v-list-item v-for="item in links" :key="item.text" class="px-0">
              <v-list-item-title>
                <a :href="item.href" class="text-grey-lighten-1 text-decoration-none hover-link">
                  {{ item.text }}
                </a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <h4 class="text-h6 text-white mb-4">Connect</h4>
          <v-row class="d-flex align-center">
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
                  color="primary"
                  class="me-2"
                  :aria-label="`Visit my ${social.name}`"
                >
                  <v-icon size="large">{{ social.icon }}</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="my-6" color="grey-darken-2"></v-divider>
      <v-row justify="center">
        <span class="text-grey-lighten-1 text-caption text-center">
          &copy; {{ new Date().getFullYear() }} RAHIM RAMADHANI HAMISI. All rights reserved.
        </span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const links = [
  { text: 'Home', href: '#' },
  { text: 'About', href: '#about' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    link: '',
  },
  {
    name: 'GitHub',
    icon: 'mdi-github',
    link: '',
  },
   {
    name: 'Instagram',
    icon: 'mdi-instagram',
    link: '',
  },
  {
    name: 'LinkedIn',
    icon: 'mdi-linkedin',
    link: '',
  },
  {
    name: 'Twitter',
    icon: 'mdi-twitter',
    link: '',
  }
 
];
</script>

<style scoped>
.footer-container {
  background-color: #121212;
  color: #ccc;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hover-link:hover {
  color: #d102c7ff;
  text-decoration: underline;
}
</style>
