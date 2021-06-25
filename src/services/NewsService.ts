import {Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";
import JsonTool from "@/services/tool/JsonTool";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import News from "@/models/News";

export default class NewsService {

    static async getNewsPaginated(component: Vue, news: News[], page: number, size: number, featured: boolean = false, labelId: number | null | undefined) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/news", {
                params: { page, size, labelId, featured }
            })
            let list = JsonTool.jsonConvert.deserializeArray(response.data, News)
            news.splice(0, news.length)
            list.forEach(v => news.push(v))
            // @ts-ignore
            component.totalItems = Number(response.headers["x-total-count"]);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se han podido obtener las noticias");
        }
    }

    static async getNews(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/news/" + id)
            // @ts-ignore
            component.news = JsonTool.jsonConvert.deserializeObject(response.data, News);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se ha podido obtener la noticia");
        }
    }

}