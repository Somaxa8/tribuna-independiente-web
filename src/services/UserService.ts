import User from "@/models/User";
import ConstantTool from "@/services/tool/ConstantTool";
import {getModule} from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";
import {Vue} from "vue-property-decorator";
import JsonTool from "@/services/tool/JsonTool";
import SnackbarModule from "@/store/SnackbarModule";

export default class UserService {

    static getUsers(component: Vue, users: User[]) {
        // @ts-ignore
        component.loading = true
        component.axios.get(ConstantTool.BASE_URL + "/api/users", {
            headers : {Authorization: getModule(SessionModule).session.token}
        })
            .then(response => {
                let list = JsonTool.jsonConvert.deserializeArray(response.data, User)
                users.splice(0, users.length)
                list.forEach(u => users.push(u))
            })
            .catch(() => getModule(SnackbarModule).makeToast("No se pudo obtener los usuarios"))
            // @ts-ignore
            .finally(() => component.loading = false)
    }

    static getUser(component: Vue, userId: number) {
        // @ts-ignore
        component.loading = true
        component.axios.get(ConstantTool.BASE_URL + "/api/users/" + userId, {
            headers: {Authorization: getModule(SessionModule).session.token}
        })
            .then(response => {
                let entity = JsonTool.jsonConvert.deserializeObject(response.data, User)
                // @ts-ignore
                component.user = entity
            })
            .catch(() => getModule(SnackbarModule).makeToast("No se pudo obtener el usuario"))
            // @ts-ignore
            .finally(() => component.loading = false)
    }

}