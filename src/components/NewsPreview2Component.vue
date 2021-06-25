<template>
    <div>
        <v-card class="mx-auto d-lg-flex" @click="rowClick(news.id)" elevation="0">
            <v-img width="380" class="align-center" :src="news.image.url"/>
            <div>
                <v-card-title class="pt-0 mt-3">{{ news.title }}</v-card-title>
                <v-card-subtitle class="pb-0">{{ stringTool.formatDate(news.createdAt) }}</v-card-subtitle>
                <v-card-text v-html="news.body.slice(0, 420) + '...'" class="pb-4"/>
            </div>
        </v-card>
        <v-divider />
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import News from "@/models/News";
import StringTool from "@/services/tool/StringTool";

@Component
export default class NewsPreview2 extends Vue {
    @Prop() readonly news!: News

    stringTool: StringTool = StringTool

    rowClick(id: string) {
        this.$router.replace("/noticias/" + id)
    }

}
</script>
