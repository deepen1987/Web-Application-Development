function timeout(ms, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("timeout exceeded"));
    }, ms);
    promise.then(resolve, reject);
  });
}

let url = `https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`;

timeout(5000, fetch(url))
  .then((Response) => Response.json())
  .then((data) => console.log(data));

// fetch(url, {
//   method: "POST",
//   data: { name: "repoas", salary: "123", age: "23" },
// })
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });
