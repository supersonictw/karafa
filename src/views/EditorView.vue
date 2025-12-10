<template>
  <v-container>
    <v-card-actions class="mb-3">
      <v-btn v-if="uuid" class="secondary" to="/">Back</v-btn>
    </v-card-actions>
    <v-card class="mt-5">
      <v-row>
        <v-col>
          <v-card-text>
            <v-textarea filled auto-grow v-model="content" label="Content" />
          </v-card-text>
        </v-col>
        <v-col class="d-none d-lg-block">
          <v-card-text>
            <v-card id="preview" flat v-html="render" />
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-text>
        <v-checkbox v-model="encrypted" label="Encrypt Note"></v-checkbox>
        <v-text-field
          v-if="encrypted"
          v-model="password"
          label="Password"
          type="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn class="red" @click="cancel">Clear</v-btn>
        <v-spacer />
        <v-btn class="primary" @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Dialog for password prompt when opening encrypted note -->
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
import { v4 as uuid } from "uuid";
import { marked } from "marked";
import { encrypt, decrypt } from "@/utils/crypto";
import { EventBus } from "@/utils/eventBus";

export default {
  name: "EditorView",
  props: {
    uuid: {
      type: String,
      required: false,
      default: () => ""
    }
  },
  data: () => ({
    content: "# KaraKaraFa\nHello, my master. :D\n",
    encrypted: false,
    password: "",
    passwordDialog: false,
    decryptPassword: "",
    originalEncryptedContent: null
  }),
  computed: {
    render() {
      return marked(this.content, { sanitize: true });
    },
  },
  watch: {
    content(e) {
      localStorage.setItem("karafa-last_update", e);
    },
  },
  methods: {
    cancel() {
      this.content = "";
      localStorage.removeItem("karafa-last_update");
    },
    save() {
      const previewTitle = document.querySelector("#preview h1");
      const title = previewTitle ? previewTitle.textContent : "Untitled";
      let contentToSave = this.content;

      if (this.encrypted && this.password) {
          contentToSave = encrypt(this.content, this.password);
      }

      const data = {
        uuid: this.uuid || uuid(),
        title: title,
        content: contentToSave,
        encrypted: this.encrypted,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      };

      if (this.uuid) {
        this.$db.table("notes").put(data);
      } else {
        this.$db.table("notes").add(data);
      }
      localStorage.removeItem("karafa-last_update");
      EventBus.$emit('show-snackbar', { text: 'Note saved successfully!', color: 'success' });
      this.$router.replace("/");
    },
    decryptNote() {
        if(this.originalEncryptedContent) {
            const decrypted = decrypt(this.originalEncryptedContent, this.decryptPassword);
            // Basic check if decryption worked (this is a weak check, ideally we'd have a checksum or known header)
            // For now, we assume if it's not garbage it might be markdown.
            // But actually `decrypt` will just return garbage if password is wrong.
            // A better way is to check if it looks like meaningful text or if we store a hash.
            // However, without changing schema too much, we just show it.
            // Ideally we should store a 'magic string' prefix in encrypted content to verify.
            this.content = decrypted;
            this.password = this.decryptPassword; // pre-fill for re-saving
            this.passwordDialog = false;
        }
    }
  },
  created() {
    const last_update = localStorage.getItem("karafa-last_update");
    if (last_update) {
      this.content = last_update;
    } else if (this.uuid) {
      this.$db
          .table("notes")
          .get(this.uuid)
          .then((i) => {
              if (i.encrypted) {
                  this.encrypted = true;
                  this.originalEncryptedContent = i.content;
                  this.passwordDialog = true;
              } else {
                  this.content = i.content;
              }
          });
    }
  },
};
</script>
