<template>
  <div>
    <v-footer dark padless style="margin-top: 40px">
      <v-card flat tile width="100%" class="white--text text-center" color="primary">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4 white--text" icon @click="redirect(icon.url)">
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          {{ footerContent }}
        </v-card-text>

        <v-divider/>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Tribuna Independiente</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class FooterComponent extends Vue {
  icons = [
    {
      icon: "mdi-facebook",
      url: ""
    },
    {
      icon: "mdi-twitter",
      url: ""
    },
    {
      icon: "mdi-telegram",
      url: ""
    },
    {
      icon: "mdi-instagram",
      url: ""
    }
  ]
  footerContent: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


  redirect(url: string) {
    window.open(url, "_blank")
  }

}
</script>
