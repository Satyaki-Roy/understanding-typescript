function add(num1: number, num2: number, showResult: boolean, str: string) {
  const result = num1 + num2;
  if (showResult) {
    console.log(str + result);
  } else {
    return result;
  }
}

add(5, 2.8, true, "Total: ");
