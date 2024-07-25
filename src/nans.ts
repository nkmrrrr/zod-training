import { z } from "zod";

// nan
const isNan = z.nan({
  required_error: "This field is required",
  invalid_type_error: "This field must be NaN",
});

isNan.parse(1); // NaN

// boolean
const isActive = z.boolean({
  required_error: "isActive is required",
  invalid_type_error: "isActive must be a boolean",
});
