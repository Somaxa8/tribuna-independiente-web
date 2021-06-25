<template>
  <div>
    <v-card class="mx-auto">
<!--      <v-img height="150" :src="news.image.url"/>-->
        <iframe :src="interview.videoUrl" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"/>

      <v-card-title>{{ interview.title }}</v-card-title>

      <v-card-text v-html="interview.body.slice(0, 120)"/>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Interview from "@/models/Interview";

@Component
export default class InterviewPreviewComponent extends Vue {
  @Prop() readonly interview!: Interview
}
</script>

