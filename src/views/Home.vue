<template>
  <div>
    <SliderComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SliderComponent from "@/components/SliderComponent.vue";

@Component({components: {SliderComponent}})
export default class Home extends Vue {}
</script>
