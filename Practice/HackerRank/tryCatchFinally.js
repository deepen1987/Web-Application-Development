function reverseString(s) {
  try {
    let a = "";
    s.split("")
      .reverse()
      .forEach((element) => {
        a += element;
      });
    console.log(a);
  } catch (error) {
    console.log(`s.split is not a function`);
    console.log(s);
  } finally {
  }
}

function main() {
  const s = eval(readLine());
  reverseString(s);
}
