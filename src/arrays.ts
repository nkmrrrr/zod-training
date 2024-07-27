import { z } from "zod";

const stringArray = z.array(z.string());
const stringArrayEquiv = z.string().array();

// nonempty
const nonEmptyStringArray = z.array(z.string()).nonempty({ message: "Array must not be empty" });
type NonEmptyStringArrayType = z.infer<typeof nonEmptyStringArray>;
nonEmptyStringArray.parse(["hello"]); // ["hello"]
nonEmptyStringArray.parse([]); // throws error

// min / max / length
z.string().array().min(5); // must contain 5 or more items
z.string().array().max(5); // must contain 5 or fewer items
z.string().array().length(5); // must contain 5 items exactly

