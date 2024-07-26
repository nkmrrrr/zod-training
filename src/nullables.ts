import { z } from "zod";

// Define a nullable string with z.nullable()
const nullableString = z.nullable(z.string());
nullableString.parse(null); // null
nullableString.parse("hello"); // 'hello'

// use .nullable() on any schema
const nullableNumber = z.number().nullable();
type E = z.infer<typeof nullableNumber>; // number | null
nullableNumber.parse(null); // null
nullableNumber.parse(42); // 42

// unwrap the nullable
const stringSchema = z.string();
const nullableStringWithNull = stringSchema.nullable();
nullableStringWithNull.unwrap() === stringSchema; // true
