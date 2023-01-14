<template>
  <q-page class="flex flex-center">
    <q-img
      src="http://localhost:5000/static/wc.png"
      spinner-color="white"
      style="height: 600px; max-width: 600px"
    />
  </q-page>
</template>

<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "VisIndex",

  setup() {
    let opti = ref("5");
    return {
      opti,
    };
  },
});
</script>
<style scoped>
.field-label {
  vertical-align: middle;
}
</style>
