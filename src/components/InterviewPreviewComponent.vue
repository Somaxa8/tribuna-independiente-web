<template>
  <div>
    <v-card class="mx-auto my-12">
<!--      <v-img height="150" :src="news.image.url"/>-->

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

