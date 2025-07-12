<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Heem Raheem</v-toolbar-title>
    <v-spacer />
    <v-btn text @click="$emit('scrollTo', 'about')">About</v-btn>
    <v-btn text @click="$emit('scrollTo', 'projects')">Projects</v-btn>
    <v-btn text @click="$emit('scrollTo', 'contact')">Contact</v-btn>
  </v-app-bar>
</template>