// export default () => {
//   console.log("Hello Modules");
// };

// export default function() {
//   console.log("Hello Modules");
// };

// export default {
//   hello: "modules",
// };

const oneThing = {
  hello: "modules",
};

const anotherThing = () => {
  console.log("Hi!");
};

export { oneThing, anotherThing };
