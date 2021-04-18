<template>
  <div>
    <v-progress-linear :indeterminate="true" :active="loading" color="warning"/>
    <v-container>
      <v-row justify="center" class="ma-5 d-flex flex-column">
        <h1 class="text-center">{{ blog.title }}</h1>
        <v-divider/>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12" v-if="blog.image">
          <v-card>
            <v-img :src="blog.image.url" height="300"/>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div v-html="blog.body"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Blog from "@/models/Blog";
import BlogService from "@/services/BlogService";

@Component
export default class BlogView extends Vue {
  loading: boolean = false
  blog: Blog = new Blog()

  created() {
    BlogService.getBlog(this, parseInt(this.$route.params.id))
  }

}
</script>
