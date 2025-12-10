<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-btn color="amber darken-3" @click="action" fab small class="mr-4">
         <v-icon>{{ icon }}</v-icon>
      </v-btn>
      <v-toolbar-title class="mr-4">🐣 Karafa</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { EventBus } from '@/utils/eventBus';

export default {
  data: () => ({
    snackbar: false,
    snackbarText: "",
    snackbarColor: "success",
  }),
  computed: {
    icon() {
      return this.$route.path === "/editor" ? "mdi-arrow-left" : "mdi-pen";
    },
  },
  methods: {
    action() {
      if (this.$route.path === "/editor") {
        this.$router.replace("/");
      } else {
        this.$router.replace("/editor");
      }
    },
  },
  created() {
    EventBus.$on('show-snackbar', ({ text, color }) => {
        this.snackbarText = text;
        this.snackbarColor = color || 'success';
        this.snackbar = true;
    });
  }
};
</script>
