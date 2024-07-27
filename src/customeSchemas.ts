import { z } from "zod";

const px = z.custom<`${number}px`>((val) => {
    return typeof val === "string" && val.endsWith("px");
})

type px = z.infer<typeof px>; // => `${number}px`

px.parse("42px"); // => "42px"
px.parse("42vw"); // => "42px"

z.custom<{ arg: string }>(); // performs no validation
