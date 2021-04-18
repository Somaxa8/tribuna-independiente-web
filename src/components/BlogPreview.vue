<template>
  <div>
    <v-card class="mx-auto d-flex" @click="rowClick(blog.id)">
      <v-img width="15%" height="100%" :src="blog.image.url"/>
      <div class="d-flex row ma-4 mt-0 mb-0">
        <v-card-title class="pt-0 mt-3">{{ blog.title }}</v-card-title>
        <v-card-text v-html="blog.body.slice(0, 420) + '...'" class="pb-0"/>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Blog from "@/models/Blog";

@Component
export default class BlogPreview extends Vue {
  @Prop() readonly blog!: Blog


  rowClick(id: string) {
    this.$router.replace("/opinion/" + id)
  }

}
</script>
