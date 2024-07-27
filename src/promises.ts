import { number, z } from "zod";

const numberPromise = z.promise(z.number());
numberPromise.parse(Promise.resolve(42));

const test = async () => {
  await numberPromise.parse(Promise.resolve("tuna"));
  await numberPromise.parse(Promise.resolve(3.14));
};

test()