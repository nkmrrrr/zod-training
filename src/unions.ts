import { string, z } from "zod";

const stringOrNumber = z.union([z.string(), z.number()]);

stringOrNumber.parse("hello"); // 'hello'
stringOrNumber.parse(42); // 42
stringOrNumber.parse(true); // throws error

// for convenience, you can use the .or() method
const stringOrNumber2 = z.string().or(z.number());
stringOrNumber2.parse("hello"); // 'hello'

// undefined でも良いし null でも良いし、空文字でも良い
const optionalUrl = z.union([z.string().url().nullish(), z.literal("")]);

console.log(optionalUrl.safeParse(undefined).success); // true
console.log(optionalUrl.safeParse(null).success); // true
console.log(optionalUrl.safeParse("").success); // true
console.log(optionalUrl.safeParse("https://zod.dev").success); // true
console.log(optionalUrl.safeParse("not a valid url").success); // false