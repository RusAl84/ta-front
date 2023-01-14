<template>
  <q-page class="flex flex-center">
    <div class="container"></div>
    <div>
      <div>
        <q-card class="page">
          <q-uploader
            :url="hostsa"
            label="Загрузите данные для анализа"
            color="green"
            square
            flat
            bordered
            single
            @uploaded="fileUploaded"
            accept=".pcap, pcap logs/*"
            style="min-width: 600px; max-width: 600px"
          />
        </q-card>
      </div>
      <div>
        <q-card class="page" v-if="output.length > 0">
          <q-card-section> <span v-html="output"></span> </q-card-section>
        </q-card>
      </div>
    </div>
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
      hostsa: cfg.hostsa,
      output: ref(""),
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    fileUploaded({ files, xhr }) {
      let data = JSON.parse(xhr.response);
      this.output = data["text"];
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
