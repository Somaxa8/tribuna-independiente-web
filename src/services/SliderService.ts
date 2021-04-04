import ConstantTool from "@/services/tool/ConstantTool";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import Slider from "@/models/Slider";
import Vue from "vue/types/umd";
import JsonTool from "@/services/tool/JsonTool";

export default class SliderService {

    static async getSliders(component: Vue, sliders: Slider[]) {
        (<any>component).loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/slider")
            let list = JsonTool.jsonConvert.deserializeArray(response.data, Slider)
            sliders.splice(0, sliders.length)
            list.forEach(v => sliders.push(v));
            (<any>component).loading = false
        } catch (err) {
            (<any>component).loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se han podido obtener los sliders");
        }

    }

    static async getSlider(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/slider/" + id)
            // @ts-ignore
            component.slider = JsonTool.jsonConvert.deserializeObject(response.data, Slider);
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            console.log(err)
            getModule(SnackbarModule).makeToast("No se ha podido obtener el Slider");
        }
    }
}