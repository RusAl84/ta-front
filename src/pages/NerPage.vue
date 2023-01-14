<template>
  <q-page class="flex flex-center">
    <div class="container"></div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import * as cfg from "../config.js";

export default {
  data() {
    return {
      file: "",
      hostner: cfg.hostner,
      output: ref(""),
    };
  },
  mounted: function (a) {
    // this.$router.push();
    window.location.href = cfg.hostner;
  },
  methods: {},
};
</script>

<style lang="sass">
.page
  padding-bottom: 10px
  padding-top: 10px
  padding-left: 10px
  padding-r: 10px
</style>
