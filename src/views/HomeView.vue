<template>
  <div>
    <SliderComponent/>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="3" v-for="headline in headlines">
                <v-card color="#385F73" dark>
                    <v-card-text style="padding-bottom: 0px; height: 128px">
                        {{ headline.body.slice(0, 141) }}
                    </v-card-text>
                    <v-card-subtitle style="padding-top: 0px">
                        {{ headline.hour }}
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-divider/>
            </v-col>
        </v-row>
      <v-row justify="center">
        <h2> Noticias Destacadas </h2>
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
<!--          <v-row class="mt-2" align="center" justify="space-between">-->
<!--            <v-btn class="ma-2" outlined tile color="secondary" light @click="$router.push('/news')">-->
<!--              - MOSTRAR TODOS - -->
<!--            </v-btn>-->
<!---->
<!--            <div class="text-center pt-2">-->
<!--              <v-pagination v-model="page" :length="pageCount" color="secondary"/>-->
<!--            </div>-->
<!--          </v-row>-->
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
import HeadlineService from "@/services/HeadlineService";
import Headline from "@/models/Headline";

@Component({components: {SliderComponent, NewsPreview}})
export default class Home extends Vue {
  newsList: News[] = []
    headlines: Headline[] = []
  loading: boolean = false
  dialog: boolean = false
  options: Options = new Options()
  page: number = 1
  pageCount: number = 0
  itemsPerPage: number = 4
  totalItems: number = 0


  @Watch("options")
  watchOptions() {
    NewsService.getNewsPaginated(this, this.newsList, this.page - 1, this.itemsPerPage, true, null)
  }

  created() {
    this.watchOptions()
      HeadlineService.getHeadlines(this, this.headlines, 0, 4)
  }
}
</script>
