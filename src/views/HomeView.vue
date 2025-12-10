<template>
  <v-container>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      class="mb-4"
    ></v-text-field>

    <v-list>
      <div v-if="!filteredNotes.length">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>KaraKaraFa 🐤🐤🐤</v-list-item-title>
            <v-list-item-subtitle>Your simple notebook. No notes found.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div v-else>
        <v-list-item v-for="(i, j) in filteredNotes" :key="j" :to="`/viewer/${i.uuid}`" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ i.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ summary(i) }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    notes: [],
    search: "",
  }),
  computed: {
    filteredNotes() {
      if (!this.search) return this.notes;
      const query = this.search.toLowerCase();
      return this.notes.filter(
        (note) =>
          (note.title && note.title.toLowerCase().includes(query)) ||
          (note.content && note.content.toLowerCase().includes(query))
      );
    },
  },
  methods: {
    summary(note) {
      return `${new Date(note.updated_at).toLocaleString()}`;
    },
  },
  mounted() {
    const cache = [];
    const desc = (a, b) => a.updated_at < b.updated_at;
    this.$db
      .table("notes")
      .each((i) => cache.push(i))
      .then(() => {
        cache.sort(desc);
        this.notes.push(...cache);
      });
  },
};
</script>
