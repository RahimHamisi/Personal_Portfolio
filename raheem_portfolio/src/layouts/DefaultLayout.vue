<template>
  <v-app>
    <Navbar @scrollTo="scrollToSection" />
    <v-main>
      <section id="home"><HomeSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import HomeSection from '@/views/HomeView.vue'
import AboutSection from '@/views/AboutView.vue'
import ProjectsSection from '@/views/ProjectsView.vue'
import ContactSection from '@/views/ContactView.vue'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>