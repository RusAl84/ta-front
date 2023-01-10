<template>
  <q-page>
    <q-card class="chatmessages">
      <div class="flexrow">
        <div>
          <q-card-section>
            <div class="text-h6">Загрузка данных:</div>
          </q-card-section>
        </div>
        <div>
          <q-card-section>
            <q-uploader
              :url="hostae"
              label="Загрузите свои данные
            .json, chatMessages/*"
              color="green"
              square
              flat
              bordered
              single
              @uploaded="fileUploaded"
              accept=".json, chatMessages/*"
              style="min-width: 600px; max-width: 600px"
            />
          </q-card-section>
        </div>
      </div>
      <q-card-section>
        <div class="editorclass">
          <q-editor
            v-model="chatmessages"
            max-height="300px"
            :dense="$q.screen.lt.md"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify'],
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify'],
                },
              ],
              [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript',
              ],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                },
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7',
                  ],
                },
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana',
                  ],
                },
                'removeFormat',
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
              ['viewsource'],
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana',
            }"
          />
        </div>
      </q-card-section>
    </q-card>
    <q-card class="chatmessages">
      <div class="flexrow">
        <div>
          <q-card-section>
            <div class="text-h6">
              Получение сжатых портретов (суммаризация) текстов:
            </div>
          </q-card-section>
          <q-input
            class="inputtext"
            v-model="proc_text"
            type="textarea"
            autogrow
            float-label="Введите текст для анализа"
          />
          <q-card-section>
            <q-btn color="primary" label="Обработать" @click="onProc" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6">Полученный портрет:</div>
          </q-card-section>
          <q-input
            class="inputtext"
            v-model="resp_text"
            type="textarea"
            readonly
            autogrow
          />
        </div>

        <div></div></div
    ></q-card>
    <q-card class="chatmessages">
      <div class="flexrow">
        <q-card-section>
          <div class="text-h6">
            Получение сжатых портретов (суммаризация) текстов:
          </div>
        </q-card-section>
      </div>
    </q-card>
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
      //url="http://127.0.0.1:5000/uploadae"
      hostae: cfg.host + "/uploadae",
      chatmessages: "",
      proc_text: "",
      resp_text: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    fileUploaded({ files, xhr }) {
      // console.log(JSON.parse(xhr.response));
      // console.log(xhr.response);
      // this.chatmessages = JSON.parse(xhr.response.data);
      this.chatmessages = xhr.response;
      // this.$refs.uploader.reset();
    },
    async onProc() {
      const form = new FormData();
      form.append("file", this.file);

      const response = await axios({
        method: "post",
        url: cfg.host + "get_pattern",
        data: {
          text: this.proc_text,
        },
      });
      console.log(response);
      this.resp_text = response["data"];
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

.chatmessages
  padding: 10px
  margin: 10px
.flexrow
  display: flex
  flex-flow: row wrap
  justify-content: flex-start
.editorclass
  max-height: 500px
.inputtext
  width: 800px
</style>
