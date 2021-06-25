<template>
  <div>
    <v-app-bar @click="$router.push('/')" height="150px" color="#fff">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" width="100%" height="100%" src="@/assets/logo_large.png" contain/>
      </template>
    </v-app-bar>

    <v-bottom-navigation height="63">
      <v-btn class="d-md-none" style="height: 100%; font-size: medium; margin-right: 5px" @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-menu open-on-hover offset-y bottom rounded="5" v-for="(button, index) in buttons" :key="index">

        <template v-slot:activator="{ on, attrs }">
          <v-btn class="d-none d-md-flex" style="height: 100% ; font-size: medium; margin-right: 5px" v-bind="attrs" v-on="on" @click="$router.push(button.url)">
            {{ button.title }}
          </v-btn>
        </template>

      </v-menu>
    </v-bottom-navigation>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list dense>

        <v-list-item-group>
          <v-list-item v-for="item in buttons" :key="item.title" @click="$router.replace(item.url)">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class NavbarComponent extends Vue {

  drawer = null

  buttons = [
    { title: "Inicio", url: "/" },
    { title: "Noticias", url: "/noticias" },
    { title: "Opinion", url: "/opinion" },
    { title: "Entrevistas", url: "/entrevistas" },
    { title: "Caricaturas", url: "/caricaturas" }
  ]

}
</script>
