import { z } from "zod";

const mySchema = z.string();

mySchema.parse("hello"); // "hello"
mySchema.parse(123); // Throws an error

mySchema.safeParse("hello"); // { success: true, data: "hello" }
mySchema.safeParse(123); // { success: false, error: [error] }

console.log(mySchema.safeParse(123))

const User = z.object({
  username: z.string(),
});

User.parse({ username: "johndoe" }); // { username: "johndoe" }

type User = z.infer<typeof User>;

