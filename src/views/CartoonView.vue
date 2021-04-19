<template>
  <div>
    <v-progress-linear :indeterminate="true" :active="loading" color="warning"/>
    <v-container>
      <v-row justify="center" class="ma-5 d-flex flex-column">
        <h1 class="text-center">Caricaturas</h1>
        <v-divider/>
      </v-row>

      <v-data-iterator
          :items="cartoon" :loading="loading"
          :show-select="false" :page.sync="page" @page-count="pageCount = $event"
          :items-per-page="itemsPerPage" :server-items-length="totalItems"
          :options.sync="options" loading-text="Cargando..." hide-default-footer>
        <template v-slot:default="{items}">
          <v-row>
            <v-col v-for="cartoon in items" :key="cartoon.id" cols="12" sm="6" md="6" lg="6">
              <CartoonPreview :cartoon="cartoon"/>
            </v-col>
          </v-row>
        </template>

        <template v-slot:footer>
          <v-divider/>
          <v-row class="mt-2" align="center" justify="end">
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
import Options from "@/models/vue/Options";
import Cartoon from "@/models/Cartoon";
import CartoonService from "@/services/CartoonService";
import CartoonPreview from "@/components/CartoonPreviewComponent.vue";

@Component({components:{CartoonPreview}})
export default class CartoonView extends Vue {
  cartoon: Cartoon[] = []
  loading: boolean = false
  dialog: boolean = false
  options: Options = new Options()
  page: number = 1
  pageCount: number = 0
  itemsPerPage: number = 4
  totalItems: number = 0

  @Watch("options")
  watchOptions() {
    CartoonService.getCartoons(this, this.cartoon, this.page - 1, this.itemsPerPage)
  }

  created() {
    this.watchOptions()
  }

}
</script>
