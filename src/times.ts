import { z } from "zod";

const time = z.string().time();
console.log(time.parse("00:00:00.1111111")); // pass
console.log(time.parse("09:52:31.11")); // pass
console.log(time.parse("23:59:59.9999999")); // pass (arbitrary precision)

const ptime = z.string().time({ precision: 7 });
console.log(ptime.parse("00:00:00Z")); // fail
console.log(ptime.parse("00:00:00+02:00")); // fail