<script setup lang="ts">
import { ref, computed } from 'vue'

const allServices = ref([
  {
    id: 1,
    title: 'Frontend Development',
    icon: 'mdi-code-braces',
    description: 'Building responsive, interactive user interfaces using Vue.js and modern web standards.',
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: 'mdi-server',
    description: 'Creating scalable APIs with Django, GraphQL, and REST, with secure backend logic.',
  },
  {
    id: 3,
    title: 'Mobile Development',
    icon: 'mdi-cellphone',
    description: 'Developing cross-platform mobile apps with Flutter for iOS and Android.',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    icon: 'mdi-palette',
    description: 'Designing intuitive user experiences with a focus on usability and aesthetics.',
  },
  // {
  //   id: 5,
  //   title: 'DevOps & CI/CD',
  //   icon: 'mdi-cog',
  //   description: 'Automating deployments and infrastructure management with best practices.',
  // },
  // {
  //   id: 6,
  //   title: 'Cloud Architecture',
  //   icon: 'mdi-cloud-outline',
  //   description: 'Designing scalable and secure cloud infrastructures.',
  // },
])

const showAll = ref(false)
const services = computed(() =>
  showAll.value ? allServices.value : allServices.value.slice(0, 5)
)
</script>

<template>
  <v-container fluid class="py-12 px-4 px-md-8 service-container">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-h3 font-weight-bold mb-8 text-primary" 
        v-animateonscroll="{ enterClass: 'fade-in-up', leaveClass: 'fade-out' }"
        >
        What I Do
        </h2>
        <v-row>
          <v-col
            v-for="service in services"
            :key="service.id"
            cols="12"
            sm="6"
            md="4"
            class="d-flex"
            v-animateonscroll="{ enterClass: 'fade-in-up' }"
          >
            <v-card
              class="service-card d-flex flex-column"
              elevation="6"
              rounded="lg"
              hover
            >
              <v-icon
                size="200"
                color="primary"
                class="rounded-t-lg"
                style="font-size: 56px; margin-top: 24px;"
              >
                {{ service.icon }}
              </v-icon>
              <v-card-title class="text-h6 font-weight-medium py-4 text-grey-lighten-1">
                {{ service.title }}
              </v-card-title>
              <v-card-text class="flex-grow-1 text-body-2 text-grey-lighten-1 px-4 pb-4">
                {{ service.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <div v-if="allServices.length > 5" class="text-center mt-6">
          <v-btn color="primary" rounded @click="showAll = !showAll">
            {{ showAll ? 'Show Less' : 'See More' }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.service-container {
  background: #121212;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #1e1e1e;
  
  min-width: 280px;     
  aspect-ratio: 1 / 1;  
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.116) !important;
}

.v-icon {
  transition: transform 0.3s ease;
  font-size: 56px !important; 
  margin-top: 24px;
}

.service-card:hover .v-icon {
  transform: scale(1.15);
}
</style>
