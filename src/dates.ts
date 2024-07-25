import { z } from "zod";

z.date().safeParse(new Date()); // success: true
console.log(z.date().safeParse("2022-01-12T00:00:00.000Z")); // success: false

// customize
const myDateSchema = z.date({
  required_error: "Please select a date and time",
  invalid_type_error: "That's not a date!",
});

const dateSchema = z.coerce.date();
type DateSchema = z.infer<typeof dateSchema>;

console.log(dateSchema.safeParse("2023-01-10T00:00:00.000Z").success); // true
console.log(dateSchema.safeParse("2023-01-10").success); // true
console.log(dateSchema.safeParse("1/10/23").success); // true
console.log(dateSchema.safeParse(new Date("1/10/23")).success); // true

console.log(dateSchema.safeParse("2023-13-10").success); // false
console.log(dateSchema.safeParse("0000-00-00").success); // false