<template>
  <div>
    <v-progress-linear :indeterminate="true" :active="loading" color="warning"/>
    <v-container>
      <v-row justify="center" class="ma-5 d-flex flex-column">
        <h1 class="text-center">Opinion</h1>
        <v-divider/>
      </v-row>

      <v-data-iterator
          :items="blogs" :loading="loading"
          :show-select="false" :page.sync="page" @page-count="pageCount = $event"
          :items-per-page="itemsPerPage" :server-items-length="totalItems"
          :options.sync="options" loading-text="Cargando..." hide-default-footer>
        <template v-slot:default="{items}">
          <v-row>
            <v-col v-for="blog in items" :key="blog.id" cols="12">
              <BlogPreview :blog="blog"/>
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
import Blog from "@/models/Blog";
import BlogService from "@/services/BlogService";
import BlogPreview from "@/components/BlogPreview.vue";

@Component({components:{BlogPreview}})
export default class BlogsView extends Vue {
  blogs: Blog[] = []
  loading: boolean = false
  dialog: boolean = false
  options: Options = new Options()
  page: number = 1
  pageCount: number = 0
  itemsPerPage: number = 4
  totalItems: number = 0


  @Watch("options")
  watchOptions() {
    BlogService.getBlogs(this, this.blogs, this.page - 1, this.itemsPerPage)
  }

  created() {
    this.watchOptions()
  }

}
</script>

