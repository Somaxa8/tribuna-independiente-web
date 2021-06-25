<template>
    <div>
        <v-card @click="rowClick(news.id)">
            <v-img height="150" :src="news.image.url"/>
            <v-card-title>{{ news.title }}</v-card-title>
            <v-card-subtitle>{{ stringTool.formatDate(news.createdAt) }}</v-card-subtitle>

            <v-card-text v-html="news.body.slice(0, 120)"/>
        </v-card>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import News from "@/models/News";
import StringTool from "@/services/tool/StringTool";

@Component
export default class NewsPreview extends Vue {
    @Prop() readonly news!: News

    stringTool: StringTool = StringTool

    rowClick(id: string) {
        this.$router.replace("/noticias/" + id)
    }
}
</script>
