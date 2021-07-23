const operations = ["plus", "minus", "multiplied", "divided", "raised"];

export const answer = (str) => {
  if (str.indexOf("?") < 0) {
    throw new Error("Syntax Error");
  }

  str = str.split(" ").filter((v) => v !== "by" || v !== "to" || v !== "the");
  if (str[0] !== "What") {
    throw new Error("Unknown operation");
  }
  str = str.splice(2);
  if (str.length === 0) {
    throw new Error("Syntax error");
  }
  console.log(str);

  str[str.length - 1] = str[str.length - 1]
    .split("")
    .filter((v) => v !== "?")
    .join("");

  if (str.length === 1) {
    return parseInt(str[0], 10);
  }

  let result = parseInt(str[0], 10);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "plus") {
      if (
        !str[i + 1] ||
        operations.includes(str[i + 1]) ||
        (!isNaN(parseInt(str[i + 1], 10)) && !isNaN(parseInt(str[i + 2], 10)))
      ) {
        throw new Error("Syntax error");
      }
      result += parseInt(str[i + 1], 10);
    }
    if (str[i] === "minus") {
      if (
        !str[i + 1] ||
        operations.includes(str[i + 1]) ||
        (!isNaN(parseInt(str[i + 1], 10)) && !isNaN(parseInt(str[i + 2], 10)))
      ) {
        throw new Error("Syntax error");
      }
      result -= parseInt(str[i + 1], 10);
    }
    if (str[i] === "multiplied") {
      if (
        !str[i + 1] ||
        operations.includes(str[i + 1]) ||
        (!isNaN(parseInt(str[i + 1], 10)) && !isNaN(parseInt(str[i + 2], 10)))
      ) {
        throw new Error("Syntax error");
      }
      result *= parseInt(str[i + 1], 10);
    }
    if (str[i] === "divided") {
      if (
        !str[i + 1] ||
        operations.includes(str[i + 1]) ||
        (!isNaN(parseInt(str[i + 1], 10)) && !isNaN(parseInt(str[i + 2], 10)))
      ) {
        throw new Error("Syntax error");
      }
      result = result / parseInt(str[i + 1], 10);
    }
    if (isNaN(str[i]) && !operations.includes(str[i])) {
      throw new Error("Unknown operation");
    }
  }

  return result;
};
