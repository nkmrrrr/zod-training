import { z } from "zod";

const Dog = z.object({
  name: z.string(),
  age: z.number(),
});

type DogType = z.infer<typeof Dog>;

type DogType2 = {
  name: string;
  age: number;
};

Dog.shape.name;
Dog.shape.age;

const keySchema = Dog.keyof();
const DogWithBreeds = Dog.extend({ breed: z.string() });

// .merge
const BaseTeacher = z.object({ students: z.array(z.string()) });
const HasID = z.object({ id: z.string() });

const Teacher = BaseTeacher.merge(HasID);
type TeacherType = z.infer<typeof Teacher>;

// pick / omit
const Recipe = z.object({
  id: z.string(),
  name: z.string(),
  ingredients: z.array(z.string()),
});

const JustTheName = Recipe.pick({ name: true });
type JustTheNameType = z.infer<typeof JustTheName>;

const NoIdRecipe = Recipe.omit({ id: true });
type NoIdRecipeType = z.infer<typeof NoIdRecipe>;

// .partial() method makes all properties optional
const user = z.object({
  email: z.string(),
  username: z.string(),
});

const partialUser = user.partial();
type PartialUserType = z.infer<typeof partialUser>;

// deep partial
const deepUser = z.object({
  username: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  strings: z.array(z.object({ value: z.string() })),
});

const deepPartialUser = user.deepPartial();
type deepPartialUser = z.infer<typeof deepPartialUser>;

// required
const requiredUser = user.required();

// passthrough
const person = z.object({
  name: z.string(),
});

const p1 = person.parse({ name: "John", extraKey: 61 }); // { name: 'John' }
const p2 = person.passthrough().parse({ name: "John", extraKey: 61 }); // { name: 'John', extraKey: 61 }

// // strict
// const strictPerson = person.strict();
// strictPerson.parse({ name: "John", extraKey: 61 }); // throws error

// strip
const strippedPerson = person.strip();
const stripped = strippedPerson.parse({ name: "John", extraKey: 61 }); // { name: 'John' }

// catchall
const catchallPerson = person.catchall(z.number());
const catchalled = catchallPerson.parse({ name: "John", age: 61 }); // { name: 'John', age: 61 }
console.log(catchalled);