<template>
  <v-container>
    <v-card class="mx-auto" max-width="600">
      <v-card-title class="headline">About Karafa</v-card-title>
      <v-card-text>
        <p>Karafa is a simple, secure, and local-first Markdown note-taking application.</p>
        <p>Current Version: 0.1.0</p>
        <p>Features:</p>
        <ul>
          <li>Create and edit notes in Markdown</li>
          <li>Local storage using IndexedDB</li>
          <li>Encrypted notes</li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" to="/">Go Home</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
};
</script>
