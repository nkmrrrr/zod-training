import { z } from "zod";

const athleteSchema = z.tuple([
  z.string(),
  z.number(),
  z.object({ pointScored: z.number() }),
]);

type Athlete = z.infer<typeof athleteSchema>;
const variadicTuple = z.tuple([z.string()]).rest(z.number());
type VariadicTuple = z.infer<typeof variadicTuple>;
const result = variadicTuple.parse(["hello", 42, 42, 42, 42]);
