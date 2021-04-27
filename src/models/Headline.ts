import {JsonObject, JsonProperty} from "json2typescript";
import Auditing from "@/models/Auditing";

@JsonObject("Headline")
export default class Headline extends Auditing {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("body", String, true)
    body?: string = undefined
    @JsonProperty("hour", String, true)
    hour?: string = undefined

}