import { z } from "zod";

// parse

// parseAsync
const stringSchema = z.string().refine(async (val) => val.length <= 8);

// await stringSchema.parseAsync("hello"); // => returns "hello"
// await stringSchema.parseAsync("hello world"); // => throws error

// safeParse

// safeParseAsync

// refine
const myString = z.string().refine(
  (val) => val.length <= 255,
  (val) => ({ message: `${val} is not more than 10 characters` })
);

//
myString.parse({ password: "asdf", confirm: "qwer" });

// Transforms and refinements can be interleaved:
z.string()
  .transform((val) => val.length)
  .refine((val) => val > 25);

// superrefine

// transform

// default
const stringWithDefault = z.string().default("hello");
stringWithDefault.parse(undefined); // => returns "hello"

// describe

// catch
const numberWithCatch = z.number().catch(42);
numberWithCatch.parse(undefined); // => returns 42
numberWithCatch.parse(5); // => returns 5

// optional
const optionalString = z.string().optional(); // => string | undefined

// nullable
const nullableString = z.string().nullable(); // => string | null

// nullish
const nullishString = z.string().nullish(); // => string | null | undefined

// array
const stringArray = z.array(z.string()); // => string[]

// promise
const stringPromise = z.promise(z.string()); // => Promise<string>

// or
const stringOrNumber = z.string().or(z.number()); // => string | number

// and
const nameAndAge = z
  .object({ name: z.string() })
  .and(z.object({ age: z.number() })); // => { name: string, age: number }

// .brand
type Cat = { name: string };

// readonly

// pipe
