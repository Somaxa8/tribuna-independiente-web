import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Interview")
export default class Interview {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("body", String, true)
    body?: string = undefined
    @JsonProperty("videoUrl", String, true)
    videoUrl?: string = undefined

}