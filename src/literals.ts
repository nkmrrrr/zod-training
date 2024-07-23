import { z } from "zod";

const tuna = z.literal("tuna");
const twelve = z.literal(12);
const twobig = z.literal(2n); // bigint literal
const tru = z.literal(true);
const terrificSymbol = Symbol("terrific");
const terrific = z.literal(terrificSymbol);

// console.log(tuna.value);
// console.log(twelve.value);

console.log(tuna.value); // "tuna"
console.log(twelve.value); // 12
console.log(twobig.value); // 2n
console.log(tru.value); // true
console.log(terrific.value); // Symbol(terrific)