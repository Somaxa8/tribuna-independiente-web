import {Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store/store";

@Module({dynamic: true, store, name: "DrawerModule"})
export default class DrawerModule extends VuexModule {

    showDrawer: boolean = true


    @Mutation
    closeOpenDrawer() {
        this.showDrawer = !this.showDrawer
    }

    @Mutation
    setDrawerEnabled(enabled: boolean) {
        this.showDrawer = enabled
    }

}