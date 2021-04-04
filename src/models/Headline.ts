import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Headline")
export default class Headline {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("body", String, true)
    body?: string = undefined
    @JsonProperty("hour", String, true)
    hour?: string = undefined

}