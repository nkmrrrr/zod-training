import { z } from "zod";

const schema = z.optional(z.string());

schema.parse("apple"); // passes
type A = z.infer<typeof schema>; // string | undefined

const user = z.object({
  username: z.string().optional(),
});
type C = z.infer<typeof user>; // { username?: string | undefined };

const stringSchema = z.string();
const optionalString = stringSchema.optional();
console.log(optionalString.unwrap() === stringSchema);
