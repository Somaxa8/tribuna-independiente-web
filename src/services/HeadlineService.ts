import {Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";
import JsonTool from "@/services/tool/JsonTool";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import Headline from "@/models/Headline";

export default class HeadlineService {

    static async getHeadlines(component: Vue, headlines: Headline[], page: number, size: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/headline", {
                params: { page, size }
            })
            let list = JsonTool.jsonConvert.deserializeArray(response.data, Headline)
            headlines.splice(0, headlines.length)
            list.forEach(v => headlines.push(v))
            // @ts-ignore
            component.totalItems = Number(response.headers["x-total-count"]);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se han podido obtener las cabeceras");
        }
    }

    static async getHeadline(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/headline/" + id)
            // @ts-ignore
            component.headline = JsonTool.jsonConvert.deserializeObject(response.data, Headline);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se ha podido obtener la cabecera");
        }
    }

}