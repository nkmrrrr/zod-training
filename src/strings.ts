import { z } from "zod";

// validations
const sch = z
  .string()
  .max(5, { message: "Must be 5 or fewer characters long" });
console.log(sch.parse("helloo")); // "hello"

z.string().min(5);
z.string().length(5);
z.string().email();
z.string().url();
z.string().emoji();
z.string().uuid();
z.string().nanoid();
z.string().cuid();
z.string().cuid2();
// z.string().regex(regex);
// z.string().includes(string);
// z.string().startsWith(string);
// z.string().endsWith(string);
z.string().datetime(); // ISO 8601; by default only `Z` timezone allowed
z.string().ip(); // defaults to allow both IPv4 and IPv6

// transforms
z.string().trim(); // trim whitespace
z.string().toLowerCase(); // toLowerCase
z.string().toUpperCase(); // toUpperCase

// added in Zod 3.23
z.string().date(); // ISO date format (YYYY-MM-DD)
z.string().time(); // ISO time format (HH:mm:ss[.SSSSSS])
z.string().duration(); // ISO 8601 duration
z.string().base64();

// customize common message
const name = z.string({
  required_error: "Name is required",
  invalid_type_error: "Name must be a string",
});

// customize specific message
z.string().min(5, { message: "Must be 5 or more characters long" });
z.string().max(5, { message: "Must be 5 or fewer characters long" });
z.string().length(5, { message: "Must be exactly 5 characters long" });
z.string().email({ message: "Invalid email address" });
z.string().url({ message: "Invalid url" });
z.string().emoji({ message: "Contains non-emoji characters" });
z.string().uuid({ message: "Invalid UUID" });
z.string().includes("tuna", { message: "Must include tuna" });
z.string().startsWith("https://", { message: "Must provide secure URL" });
z.string().endsWith(".com", { message: "Only .com domains allowed" });
z.string().datetime({ message: "Invalid datetime string! Must be UTC." });
// z.string().date({ message: "Invalid date string!" });
z.string().time({ message: "Invalid time string!" });
z.string().ip({ message: "Invalid IP address" });
