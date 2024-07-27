import { z } from "zod";

const castToString = z.preprocess((val) => String(val), z.string());

