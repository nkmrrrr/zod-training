import { z } from "zod";

const mySchema = z.string();

mySchema.parse("hello"); // "hello"
mySchema.parse(123); // Throws an error

