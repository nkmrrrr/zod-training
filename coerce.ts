import { z } from "zod";

const schema = z.coerce.string();

console.log(typeof schema.parse(123)); // "123"
console.log(typeof schema.parse(12)); // => "12"
console.log(typeof schema.parse(true)); // => "true"
console.log(typeof schema.parse(undefined)); // => "undefined"
console.log(typeof schema.parse(null)); // => "null"
console.log(z.coerce.string().email().min(5));

z.coerce.string(); // String(input)
z.coerce.number(); // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint(); // BigInt(input)
z.coerce.date(); // new Date(input)