import { z } from "zod";

const myUnion = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("success"),
    data: z.string(),
  }),
  z.object({
    status: z.literal("error"),
    message: z.string(),
  }),
]);

myUnion.parse({ status: "success", data: "hello" }); // { status: 'success', data: 'hello' }
myUnion.options;

const A = z.discriminatedUnion("status", [
  /* options */
]);
const B = z.discriminatedUnion("status", [
  /* options */
]);

const AB = z.discriminatedUnion("status", [...A.options, ...B.options]);
