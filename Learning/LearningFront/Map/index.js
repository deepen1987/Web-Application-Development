const maps = new Map();

maps
  .set("firstName", "Deependrasingh")
  .set("lastName", "Shekhawat")
  .set("age", 33)
  .set("work", "Dell Technologies")
  .set("hobbies", [
    "Footbal",
    "Cricket",
    "Video Games",
    "Baking",
    "Cooking Indian Cusines",
  ]);

console.log(maps);

maps.forEach((element) => {
  if (typeof element === "object") {
    for (const iterator of element) {
      console.log(iterator);
    }
  } else if (typeof element !== "object") {
    console.log(element);
  }
});
