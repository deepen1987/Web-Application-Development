function BlogPost(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.views = 0),
    (this.Comments = []),
    (this.isLive = false);
}

let post = new BlogPost("a", "b", "c");
console.log(post);
post.Comments[("aaa", "baa")];

let priceRange = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expansive", minPerPerson: 21, maxPerPerson: 30 },
];

let resturants = [{ averagePerPerson: 11 }];

console.log(resturants[0].averagePerPerson);

for (const iterator of resturants) {
  a = iterator.averagePerPerson;
  for (const iterator1 of priceRange) {
    if (a <= iterator1.maxPerPerson && a >= iterator1.minPerPerson)
      console.log(iterator1.label, iterator1.tooltip);
  }
}
