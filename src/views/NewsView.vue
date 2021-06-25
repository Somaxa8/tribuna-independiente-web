<template>
  <div>
    <v-progress-linear :indeterminate="true" :active="loading" color="warning"/>
    <v-container>
      <v-row justify="center" class="ma-5 d-flex flex-column">
        <h1 class="text-center">Noticias</h1>
        <v-divider/>
      </v-row>

      <v-data-iterator
          :items="newsList" :loading="loading"
          :show-select="false" :page.sync="page" @page-count="pageCount = $event"
          :items-per-page="itemsPerPage" :server-items-length="totalItems"
          :options.sync="options" loading-text="Cargando..." hide-default-footer>
        <template v-slot:default="{items}">
          <v-row>
            <v-col v-for="news in items" :key="news.id" cols="12">
              <NewsPreview :news="news"/>
            </v-col>
          </v-row>
        </template>

        <template v-slot:footer>
          <v-divider/>
          <v-row class="mt-2" align="center" justify="space-between">
            <div class="ml-2 pt-2">
              <v-select
                  :items="labels" v-model="label" label="Etiqueta" clearable
                  @change="watchOptions" @click:clear="() => {label.id=null; watchOptions()}"
              >
                <template v-slot:label>
                  Todas
                </template>
                <template v-slot:item="{item}">
                  {{item.title}}
                </template>
                <template v-slot:selection="{item}">
                  {{item.title}}
                </template>
              </v-select>
            </div>
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
import {Component, Vue, Watch} from "vue-property-decorator";
import News from "@/models/News";
import Options from "@/models/vue/Options";
import NewsService from "@/services/NewsService";
import NewsPreview from "@/components/NewsPreview2Component.vue";
import NewsLabelService from "@/services/NewsLabelService";
import NewsLabel from "@/models/NewsLabel";

@Component({components:{NewsPreview}})
export default class NewsView extends Vue {
  newsList: News[] = []
  labels: NewsLabel[] = []
  label: NewsLabel = new NewsLabel()
  loading: boolean = false
  dialog: boolean = false
  options: Options = new Options()
  page: number = 1
  pageCount: number = 0
  itemsPerPage: number = 4
  totalItems: number = 0


  @Watch("options")
  watchOptions() {
    NewsService.getNewsPaginated(this, this.newsList, this.page - 1, this.itemsPerPage, false, this.label.id)
  }

  created() {
    NewsLabelService.getLabels(this, this.labels)
    this.watchOptions()
  }

}
</script>
