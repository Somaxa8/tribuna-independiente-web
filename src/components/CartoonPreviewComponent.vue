<template>
  <div>
    <v-card class="mx-auto">
      <v-img height="350" :src="cartoon.image.url"/>

      <v-card-title>{{ cartoon.title }}</v-card-title>

      <v-card-text v-html="cartoon.body.slice(0, 120)"/>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Cartoon from "@/models/Cartoon";

@Component
export default class CartoonPreviewComponent extends Vue {
  @Prop() readonly cartoon!: Cartoon
}
</script>
