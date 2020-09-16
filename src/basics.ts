function addBasics(
  num1: number,
  num2: number,
  showResult: boolean,
  str: string
) {
  const result = num1 + num2;
  if (showResult) {
    console.log(str + result);
  } else {
    return result;
  }
}

addBasics(5, 2.8, true, "Total: ");
