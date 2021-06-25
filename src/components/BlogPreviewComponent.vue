<template>
    <div>
        <v-card class="mx-auto d-lg-flex" @click="rowClick(blog.id)" elevation="0">
            <v-img width="380" height="100%" :src="blog.image.url"/>
            <div>
                <v-card-title class="pt-0 mt-3">{{ blog.title }}</v-card-title>
                <v-card-subtitle class="pb-0">{{ stringTool.formatDate(blog.createdAt) }}</v-card-subtitle>
                <v-card-text v-html="blog.body.slice(0, 420) + '...'" class="pb-4"/>
            </div>
        </v-card>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Blog from "@/models/Blog";
import StringTool from "@/services/tool/StringTool";

@Component
export default class BlogPreview extends Vue {
    @Prop() readonly blog!: Blog
    stringTool: StringTool = StringTool


    rowClick(id: string) {
        this.$router.replace("/opinion/" + id)
    }

}
</script>
