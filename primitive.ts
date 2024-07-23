import { z } from "zod";

// primitive values
console.log(z.string());
console.log(z.number());
console.log(z.bigint());
console.log(z.boolean());
console.log(z.date());
console.log(z.symbol());

// empty types
console.log(z.undefined());
console.log(z.null());
console.log(z.void()); // accepts undefined

// catch-all types
// allows any value
console.log(z.any());
console.log(z.unknown());

// never tyep
console.log(z.never());