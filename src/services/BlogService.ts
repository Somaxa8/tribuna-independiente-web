import {Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";
import JsonTool from "@/services/tool/JsonTool";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import Blog from "@/models/Blog";

export default class BlogService {

    static async getBlogs(component: Vue, blogs: Blog[], page: number, size: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/blog", {
                params: { page, size }
            })
            let list = JsonTool.jsonConvert.deserializeArray(response.data, Blog)
            blogs.splice(0, blogs.length)
            list.forEach(v => blogs.push(v))
            // @ts-ignore
            component.totalItems = Number(response.headers["x-total-count"]);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se han podido obtener los blogs");
        }
    }

    static async getBlog(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/blog/" + id)
            // @ts-ignore
            component.blog = JsonTool.jsonConvert.deserializeObject(response.data, Blog);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se ha podido obtener el blog");
        }
    }

}