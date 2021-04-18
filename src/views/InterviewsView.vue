<template>
  <div>
    <v-progress-linear :indeterminate="true" :active="loading" color="warning"/>
    <v-container>
      <v-row justify="center" class="ma-5 d-flex flex-column">
        <h1 class="text-center">Entrevistas</h1>
        <v-divider/>
      </v-row>

      <v-data-iterator
          :items="interviews" :loading="loading"
          :show-select="false" :page.sync="page" @page-count="pageCount = $event"
          :items-per-page="itemsPerPage" :server-items-length="totalItems"
          :options.sync="options" loading-text="Cargando..." hide-default-footer>
        <template v-slot:default="{items}">
          <v-row>
            <v-col v-for="interview in items" :key="interview.id" cols="12">
              <InterviewPreview :interview="interview"/>
            </v-col>
          </v-row>
        </template>

        <template v-slot:footer>
          <v-divider/>
          <v-row class="mt-2" align="center" justify="space-between">
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
import Interview from "@/models/Interview";
import InterviewService from "@/services/InterviewService";
import InterviewPreview from "@/components/InterviewPreviewComponent.vue";

@Component({components:{InterviewPreview}})
export default class InterviewsView extends Vue {
  interviews: Interview[] = []
  loading: boolean = false
  dialog: boolean = false
  options: Options = new Options()
  page: number = 1
  pageCount: number = 0
  itemsPerPage: number = 4
  totalItems: number = 0


  @Watch("options")
  watchOptions() {
    InterviewService.getInterviews(this, this.interviews, this.page - 1, this.itemsPerPage)
  }

  created() {
    this.watchOptions()
  }

}
</script>
