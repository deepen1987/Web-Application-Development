/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let constantS = "";
  [...s].forEach((e) => {
    if (["a", "e", "i", "o", "u"].includes(e)) {
      console.log(e);
    } else {
      constantS += e + "\n";
    }
  });
  console.log(constantS);
}

function main() {
  const s = "javascriptloops";

  vowelsAndConsonants(s);
}

main();
