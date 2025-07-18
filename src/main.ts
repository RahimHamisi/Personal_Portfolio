import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import animateOnScroll from '@/directives/animateOnScroll.ts'
import '@/assets/animations.css';
import App from './App.vue'
// import AppFooter from './components/AppFooter.vue'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#d102c7ff',
          background: '#121212',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  components,
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.directive('animateonscroll', animateOnScroll);
app.mount('#app')
