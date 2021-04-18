<template>
    <div>
      <v-card class="mx-auto my-12" @click="console.log('hola')">
        <v-img height="150" :src="news.image.url"/>

        <v-card-title>{{ news.title }}</v-card-title>

        <v-card-text v-html="news.body.slice(0, 120)"/>
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
