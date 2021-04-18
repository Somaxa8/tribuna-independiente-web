<template>
  <div>
    <SliderComponent/>

    <v-container>

      <v-row justify="center">
        <h2> Ultimas Noticias </h2>
      </v-row>

      <v-data-iterator
          :items="newsList" :loading="loading"
          :show-select="false" :page.sync="page" @page-count="pageCount = $event"
          :items-per-page="itemsPerPage" :server-items-length="totalItems"
          :options.sync="options" loading-text="Cargando..." hide-default-footer
      >
        <template v-slot:default="{items}">
          <v-row>
            <v-col v-for="news in items" :key="news.id" cols="12" sm="6" md="4" lg="3">
              <NewsPreview :news="news" />
            </v-col>
          </v-row>
        </template>

        <template v-slot:footer>
          <v-divider/>
          <v-row class="mt-2" align="center" justify="space-between">
            <v-btn class="ma-2" outlined tile color="secondary" light @click="$router.push('/news')">
              - MOSTRAR TODOS -
            </v-btn>

            <div class="text-center pt-2">
              <v-pagination v-model="page" :length="pageCount" color="secondary"/>
            </div>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import SliderComponent from "@/components/SliderComponent.vue";
import NewsPreview from "@/components/NewsPreviewComponent.vue";
import News from "@/models/News";
import NewsService from "@/services/NewsService";
import Options from "@/models/vue/Options";

@Component({components: {SliderComponent, NewsPreview}})
export default class Home extends Vue {
  newsList: News[] = []
  loading: boolean = false
  dialog: boolean = false
  options: Options = new Options()
  page: number = 1
  pageCount: number = 0
  itemsPerPage: number = 4
  totalItems: number = 0


  @Watch("options")
  watchOptions() {
    NewsService.getNewsPaginated(this, this.newsList, this.page - 1, this.itemsPerPage, null)
  }

  created() {
    this.watchOptions()
  }
}
</script>
