<template>
  <v-app>
    <NavbarComponent/>
    <v-main>
      <router-view/>
      <DialogComponent/>
    </v-main>
    <FooterComponent/>
    <SnackbarComponent/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from "vue-property-decorator"
import NavbarComponent from "@/components/NavbarComponent.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import DialogComponent from "@/components/DialogComponent.vue";
import {getModule} from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";

@Component({components: {DialogComponent, SnackbarComponent, NavbarComponent, FooterComponent}})
export default class App extends Vue {

  created() {
    this.$vuetify.theme.dark = getModule(SessionModule).session.dark
  }

}
</script>