import {Vue} from "vue-property-decorator";
import NewsLabel from "@/models/NewsLabel";
import ConstantTool from "@/services/tool/ConstantTool";
import JsonTool from "@/services/tool/JsonTool";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";

export default class NewsLabelService {

    static async getLabels(component: Vue, labels: NewsLabel[]) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/news-label")
            let list = JsonTool.jsonConvert.deserializeArray(response.data, NewsLabel)
            labels.splice(0, labels.length)
            list.forEach(v => labels.push(v))
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se han podido obtener las etiquetas");
        }
    }

    static async getLabel(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/news-label/" + id)
            // @ts-ignore
            component.label = JsonTool.jsonConvert.deserializeObject(response.data, NewsLabel);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se ha podido obtener la etiqueta");
        }
    }

}