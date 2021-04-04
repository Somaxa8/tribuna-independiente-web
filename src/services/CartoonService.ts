import {Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";
import JsonTool from "@/services/tool/JsonTool";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import Cartoon from "@/models/Cartoon";

export default class CartoonService {

    static async getCartoons(component: Vue, cartoons: Cartoon[], page: number, size: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/cartoon", {
                params: { page, size }
            })
            let list = JsonTool.jsonConvert.deserializeArray(response.data, Cartoon)
            cartoons.splice(0, cartoons.length)
            list.forEach(v => cartoons.push(v))
            // @ts-ignore
            component.totalItems = Number(response.headers["x-total-count"]);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se han podido obtener las caricaturas");
        }
    }

    static async getCartoon(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/cartoon/" + id)
            // @ts-ignore
            component.cartoon = JsonTool.jsonConvert.deserializeObject(response.data, Cartoon);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se ha podido obtener la caricatura");
        }
    }

}