import { z } from "zod";

// Datetimes
const datetime = z.string().datetime({ offset: true });
const pdatetime = z.string().datetime({ precision: 3 });

console.log(datetime.parse("2020-01-01T00:00:00Z")); // pass
console.log(datetime.parse("2020-01-01T00:00:00.123Z")); // pass
console.log(datetime.parse("2020-01-01T00:00:00.123456Z")); // pass (arbitrary precision)
console.log(datetime.parse("2020-01-01T00:00:00+02:00")); // fail (no offsets allowed)

pdatetime.parse("2020-01-01T00:00:00.123Z"); // pass
pdatetime.parse("2020-01-01T00:00:00Z"); // fail
pdatetime.parse("2020-01-01T00:00:00.123456Z"); // fail

