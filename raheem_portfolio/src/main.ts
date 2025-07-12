import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import SocialLinks from './components/SocialLink.vue';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#0288d1',
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
});

const app = createApp(App);
app.component('SocialLinks', SocialLinks);
app.use(vuetify);
app.mount('#app');