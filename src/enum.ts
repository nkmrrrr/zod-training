import { z } from "zod"

const Fish = z.enum(["salmon", "tuna", "mackerel"])
type Fish = z.infer<typeof Fish>

const VALUES = ["salmon", "tuna", "mackerel"] as const
const FishEnum = z.enum(VALUES)

console.log(FishEnum.enum.salmon); // salmon
console.log(FishEnum.enum);
console.log(FishEnum.options);

const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
const SalmonAndTrout = FishEnum.extract(["Salmon", "Trout"]);
const TunaOnly = FishEnum.exclude(["Salmon", "Trout"]);

// console.log(FishEnum)
// console.log(SalmonAndTrout)
// console.log(TunaOnly)