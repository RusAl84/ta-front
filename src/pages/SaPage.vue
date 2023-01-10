<template>
  <q-page class="flex flex-center">
    <div class="container"></div>
    <form :action="hostsa" method="POST" enctype="multipart/form-data">
      <input type="file" name="File" />
      <input type="submit" value="Обработать" />
    </form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import * as cfg from "../config.js";

export default {
  data() {
    return {
      file: "",
      host: cfg.host,
      hostsa: cfg.host + "/uploadsa",
    };
  },
  methods: {
    async submitFile() {
      const form = new FormData();
      form.append("file", this.file);

      const response = await axios({
        method: "post",
        url: this.hostsa,
        data: form,
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      });
      console.log(response);
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style lang="sass">
.page
  padding-bottom: 10px
  padding-top: 10px
  padding-left: 10px
  padding-r: 10px
</style>
