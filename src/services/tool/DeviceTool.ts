import {Vue} from "vue-property-decorator";

export default class DeviceTool {

    static isSmall(component: Vue) {
        switch (component.$vuetify.breakpoint.name) {
            case 'xs': case 'sm': return true
            default: return false
        }
    }

    static isMedium(component: Vue) {
        switch (component.$vuetify.breakpoint.name) {
            case 'xs': case 'sm': case 'md': return true
            default: return false
        }
    }

    static getDevice(component: Vue) {
        switch (component.$vuetify.breakpoint.name) {
            case 'xs': return '220px'
            case 'sm': return '400px'
            case 'md': return '500px'
            case 'lg': return '600px'
            case 'xl': return '800px'
        }
    }

    static getBreakpoint(component: Vue) {
        return component.$vuetify.breakpoint.name
    }

}