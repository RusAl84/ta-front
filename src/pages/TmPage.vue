<template>
  <q-page class="flex flex-center">
    <q-card class="big-card" bordered>
      <q-card class="box-card" bordered>
        <q-card-section>
          <q-input class="textInput" filled type="textarea" v-model="text">
          </q-input> </q-card-section
      ></q-card>

      <q-card-actions class="flex flex-center">
        <q-btn color="primary" @click="onSendClick">
          Определить тематики диалогов
        </q-btn>
        <q-btn color="primary" :href="hosttm1">
          Визуализация облако слов
        </q-btn>
        <q-btn color="primary" :href="hosttm2">
          Интерактивная визуализация
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import API from "../api/api";
import * as cfg from "../config.js";

export default defineComponent({
  name: "PageIndex",
  setup() {
    let text = ref("");
    let hosttm1 = ref("");
    let hosttm2 = ref("");
    //  "Главный герой всю жизнь занимается финансовыми махинациями. Это не только приносит ему солидные деньги, но и удовольствие от столь рискованных предприятий. На этот раз он решает взломать компьютерную систему государственного банка и завладеть суммой денег, которой ему хватит до конца жизни. Но нужен напарник, хорошо разбирающийся в компьютерах. Он находит одного парня, отбывшего срок за финансовое преступление. Тот не хочет возвращаться в тюрьму и отказывает мошеннику, но вскоре соглашается. А немногим позже компьютерщик понимает, что на свою долю он может не рассчитывать: его попросту используют. Между напарниками начинается настоящая война за ещё не добытые деньги.";
    let topic_num = ref("5");
    let opti = ref("5");
    return {
      text,
      topic_num,
      opti,
      hosttm1: cfg.hosttm1,
      hosttm2: cfg.hosttm2,
    };
  },

  methods: {
    async onSendClick() {
      try {
        this.opti = await API.sendMessage(this.text, this.topic_num);
        console.log(this.opti);
        // this.$router.push("/vis");
      } catch (e) {
        console.error(e);
      }
    },
    fontSizeMapper: (word) => Math.log2(word.value) * 5,
  },
});
</script>

<style scoped>
.field-label {
  vertical-align: middle;
}
.big-card {
  height: 500px;
  width: 100%;
  margin: 20px auto;
  padding: 20px auto;
}
.box-card {
  max-width: 100%;
}
.textInput {
  margin: 20px auto;
  padding: 30px 24px;
}
.tag-item {
  margin-right: 15px;
}
</style>
