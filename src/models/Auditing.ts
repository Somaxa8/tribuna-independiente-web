import {JsonProperty} from "json2typescript";
import DateTimeConverter from "@/services/converters/DateTimeConverter";
import {DateTime} from "luxon";

export default class Auditing {

    @JsonProperty("createdAt", DateTimeConverter, true)
    createdAt?: DateTime = undefined

}