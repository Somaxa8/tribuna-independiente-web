<template>
    <div>
      <v-progress-linear :indeterminate="true" :active="loading" color="warning"/>
      <v-container>
        <v-row justify="center" class="ma-5 d-flex flex-column">
          <h1 class="text-center">{{ news.title }}</h1>
          <v-divider/>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12" v-if="news.image">
            <v-card>
              <v-img :src="news.image.url" height="300"/>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div v-html="news.body"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import News from "@/models/News";
import NewsService from "@/services/NewsService";

@Component
export default class NewView extends Vue {
  loading: boolean = false
  news: News = new News()

  created() {
    NewsService.getNews(this, parseInt(this.$route.params.id))
  }

}
</script>
