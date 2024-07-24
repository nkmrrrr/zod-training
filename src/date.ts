import { z } from "zod";

// Dates
const date = z.string().date();

console.log(date.parse("2020-01-01")); // pass
console.log(date.parse("2020-01-01T00:00:00Z")); // fail
