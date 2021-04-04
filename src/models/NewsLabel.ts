import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("NewsLabel")
export default class NewsLabel {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined

}