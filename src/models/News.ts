import {JsonObject, JsonProperty} from "json2typescript";
import Document from "@/models/Document";
import NewsLabel from "@/models/NewsLabel";

@JsonObject("News")
export default class News {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("image", Document, true)
    image?: Document = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("body", String, true)
    body?: string = undefined
    @JsonProperty("featured", Boolean, true)
    featured?: boolean = undefined
    @JsonProperty("label", NewsLabel, true)
    label?: NewsLabel = undefined

}