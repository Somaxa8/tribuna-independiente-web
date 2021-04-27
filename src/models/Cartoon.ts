import {JsonObject, JsonProperty} from "json2typescript";
import Document from "@/models/Document";
import Auditing from "@/models/Auditing";

@JsonObject("Cartoon")
export default class Cartoon extends Auditing {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("body", String, true)
    body?: string = undefined
    @JsonProperty("image", Document, true)
    image?: Document = undefined

}