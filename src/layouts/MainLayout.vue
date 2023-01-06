<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Цифровая платформа текстовой аналитики
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Ссылки
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'О проекте',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Система обнаружения активных эксплоитов в корпоративном комьюнити',
    icon: 'code',
    link: '/ae'
  },

  {
    title: 'Система анализа текстов для распознавания именованных сущностей',
    icon: 'record_voice_over',
    link: '/ner'
  },
    {
    title: 'Система анализа диалоговых текстов на основе тематического моделирования',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/tm'
  },
  {
    title: 'Система классификации текстов с учетом векторной модели',
    icon: 'rss_feed',
    link: '/ct'
  },
  {
    title: 'Cистема анализа сетевой активности для обнаружения вторжений',
    icon: 'public',
    link: '/sa'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
