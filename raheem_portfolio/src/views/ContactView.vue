<template>
  <v-container fluid class="py-12 px-4 px-md-8 contact-container">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="contact-card pa-6 pa-md-8" elevation="6" rounded="lg">
          <h2 class="text-h3 font-weight-bold mb-6 text-primary text-center">
            Get in Touch
          </h2>
          <p class="text-body-1 text-grey-lighten-1 mb-8 text-center">
            Feel free to reach out with any questions or opportunities!
          </p>
          <v-form v-model="valid" ref="form" @submit.prevent="submitForm">
            <v-text-field
              v-model="form.name"
              label="Name"
              outlined
              dense
              class="mb-4"
              :rules="nameRules"
              prepend-inner-icon="mdi-account"
              color="primary"
              rounded
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              label="Email"
              outlined
              dense
              class="mb-4"
              :rules="emailRules"
              prepend-inner-icon="mdi-email"
              color="primary"
              rounded
            ></v-text-field>
            <v-textarea
              v-model="form.message"
              label="Message"
              outlined
              rows="5"
              class="mb-6"
              :rules="messageRules"
              prepend-inner-icon="mdi-message-text"
              color="primary"
              rounded
            ></v-textarea>
            <v-btn
              type="submit"
              color="primary"
              large
              block
              rounded="md"
              class="text-capitalize py-6"
              :disabled="!valid"
              :loading="loading"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const valid = ref<boolean>(false);
const loading = ref<boolean>(false);
const form = reactive<FormData>({
  name: '',
  email: '',
  message: '',
});

const nameRules: Array<(v: string) => string | boolean> = [
  (v: string) => !!v || 'Name is required',
  (v: string) => v.length <= 50 || 'Name must be less than 50 characters',
];

const emailRules: Array<(v: string) => string | boolean> = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid',
];

const messageRules: Array<(v: string) => string | boolean> = [
  (v: string) => !!v || 'Message is required',
  (v: string) => v.length >= 10 || 'Message must be at least 10 characters',
];

const submitForm = async (): Promise<void> => {
  loading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', form);
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error) {
    console.error('Form submission failed:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-container {
  background: #121212;
}

.contact-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #1e1e1e;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1) !important;
}

.v-btn {
  transition: background-color 0.3s ease;
}

.v-btn:hover {
  background-color: #0288d1 !important;
}
</style>