import { z } from "zod";

const User = z.object({ name: z.string(), age: z.number() });
const UserStore = z.record(z.string(), User);
type UserStoreType = z.infer<typeof UserStore>;

const userStore: UserStoreType = {};
userStore["alice"] = { name: "Alice", age: 42 };

