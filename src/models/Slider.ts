import {JsonObject, JsonProperty} from "json2typescript";
import Document from "@/models/Document";

@JsonObject("Slider")
export default class Slider {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("url", String, true)
    url?: string = undefined
    @JsonProperty("image", Document, true)
    image?: Document = undefined

}