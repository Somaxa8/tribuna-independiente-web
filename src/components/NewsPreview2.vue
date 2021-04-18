<template>
  <div>
    <v-card class="mx-auto d-flex" @click="console.log('hola')">
      <v-img width="15%" height="100%" :src="news.image.url"/>
      <div class="d-flex row ma-4 mt-0 mb-0">
        <v-card-title class="pt-0 mt-3">{{ news.title }}</v-card-title>
        <v-card-text v-html="news.body.slice(0, 420) + '...'" class="pb-0"/>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import News from "@/models/News";

@Component
export default class NewsPreview extends Vue {
  @Prop() readonly news!: News
}
</script>
