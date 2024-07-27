import { z } from "zod";

const stringNumberMap = z.map(z.string(), z.number());
type StringNumberMap = z.infer<typeof stringNumberMap>;

const maps = new Map([
  ["hello", 42],
  ["world", 43],
]);
stringNumberMap.parse(maps);
