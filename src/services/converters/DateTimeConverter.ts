import {JsonConverter, JsonCustomConvert} from "json2typescript";
import {DateTime} from "luxon";

@JsonConverter
export default class DateTimeConverter implements JsonCustomConvert<DateTime> {

    deserialize(data: any): DateTime {
        return DateTime.fromISO(data);
    }

    serialize(data: DateTime): any {
        return data.toISO()
    }

}