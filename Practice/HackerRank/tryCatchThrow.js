function isPositive(a) {
  try {
    if (a > 0) {
      return "YES";
    } else if (a === 0) {
      throw "Zero Error";
    } else if (a < 0) {
      throw "Negative Error";
    }
  } catch (error) {
    return error;
  }
}

function main() {
  const n = +readLine();
  for (let i = 0; i < n; i++) {
    const a = +readLine();

    try {
      console.log(isPositive(a));
    } catch (e) {
      console.log(e.message);
    }
  }
}
