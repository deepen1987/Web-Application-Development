const l = console.log;

const radha = {
  firstName: "Deependra",
  lastName: "Shekhawat",
  age: 33,
  social: { twitter: "www.twitter.com", github: "www.github.com" },
  friends: ["Neha", "Sushant", "Rita", "Ankita", "Mrinal"],
};

const { twitter, github } = radha.social;

l(twitter, github);

const [...friend] = radha.friends;

l(...friend);
const radhaMap = new Map(Object.entries(radha));

l(radhaMap);
l(Object.entries(radha));
Object.keys(radha).forEach((e) => {
  l(e);
});
