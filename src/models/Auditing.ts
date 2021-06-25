import {JsonObject, JsonProperty} from "json2typescript";
import DateTimeConverter from "@/services/converters/DateTimeConverter";
import {DateTime} from "luxon";
import User from "@/models/User";

@JsonObject("Auditing")
export default class Auditing {

    @JsonProperty("createdAt", DateTimeConverter, true)
    private _createdAt?: DateTime = undefined

    @JsonProperty("updatedAt", DateTimeConverter, true)
    private _updatedAt?: DateTime = undefined

    @JsonProperty("createdBy", User, true)
    private _createdBy?: User = undefined

    get createdBy(): User | undefined {
        return this._createdBy;
    }
    set createdBy(value: User | undefined) {
        this._createdBy = value;
    }
    get updatedAt(): DateTime | undefined {
        return this._updatedAt;
    }
    set updatedAt(value: DateTime | undefined ) {
        this._updatedAt = value;
    }
    get createdAt(): DateTime | undefined {
        return this._createdAt;
    }
    set createdAt(value: DateTime | undefined ) {
        this._createdAt = value;
    }

}