<template>
  <div>
    <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item contain v-for="(slide ,i) in slides" :key="i" eager>
        <v-img contain height="100%" :src="slide.image.url" @click="redirect(slide.url)" eager/> </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Slider from "@/models/Slider";
import SliderService from "@/services/SliderService";

@Component
export default class SliderComponent extends Vue {
  slides: Slider[] = []


  created() {
    SliderService.getSliders(this, this.slides)
  }

  redirect(url : string) {
    window.open(url, "_blank")
  }

}
</script>