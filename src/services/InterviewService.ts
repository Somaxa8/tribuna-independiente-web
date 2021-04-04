import {Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";
import JsonTool from "@/services/tool/JsonTool";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import Interview from "@/models/Interview";

export default class InterviewService {

    static async getInterviews(component: Vue, interviews: Interview[], page: number, size: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/interview", {
                params: { page, size }
            })
            let list = JsonTool.jsonConvert.deserializeArray(response.data, Interview)
            interviews.splice(0, interviews.length)
            list.forEach(v => interviews.push(v))
            // @ts-ignore
            component.totalItems = Number(response.headers["x-total-count"]);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se han podido obtener las entrvistas");
        }
    }

    static async getInterview(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/interview/" + id)
            // @ts-ignore
            component.interview = JsonTool.jsonConvert.deserializeObject(response.data, Interview);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se ha podido obtener la entrvistas");
        }
    }

}