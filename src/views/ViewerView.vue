<template>
  <v-container>
    <v-card-actions class="mb-3">
      <v-btn class="secondary" to="/">Back</v-btn>
      <v-spacer />
      <v-btn class="red darken-3" @click="deleteThis">Delete</v-btn>
      <v-btn class="amber darken-3" :to="`/editor/${uuid}`">Edit</v-btn>
    </v-card-actions>
    <v-card>
      <v-card-text>
        <v-card id="preview" flat v-html="render" />
      </v-card-text>
    </v-card>

    <v-dialog v-model="passwordDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Enter Password</v-card-title>
        <v-card-text>
            This note is encrypted. Please enter the password to decrypt it.
            <v-text-field v-model="decryptPassword" type="password" label="Password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="decryptNote">Decrypt</v-btn>
          <v-btn color="red darken-1" text @click="$router.push('/')">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { marked } from "marked";
import { decrypt } from "@/utils/crypto";
import { EventBus } from "@/utils/eventBus";

export default {
  name: "ViewerView",
  props: {
    uuid: {
      type: String,
      required: true
    }
  },
  data: () => ({
    content: "",
    passwordDialog: false,
    decryptPassword: "",
    originalEncryptedContent: null
  }),
  computed: {
    render() {
      return marked(this.content, { sanitize: true });
    },
  },
  methods: {
    deleteThis() {
      this.$db.table("notes").delete(this.uuid);
      EventBus.$emit('show-snackbar', { text: 'Note deleted.', color: 'info' });
      this.$router.replace("/");
    },
    decryptNote() {
        if(this.originalEncryptedContent) {
            const decrypted = decrypt(this.originalEncryptedContent, this.decryptPassword);
            this.content = decrypted;
            this.passwordDialog = false;
        }
    }
  },
  created() {
    this.$db
      .table("notes")
      .get(this.uuid)
      .then((i) => {
          if (i.encrypted) {
              this.originalEncryptedContent = i.content;
              this.passwordDialog = true;
          } else {
              this.content = i.content;
          }
      });
  },
};
</script>
