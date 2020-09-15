function add(num1, num2, showResult, str) {
    var result = num1 + num2;
    if (showResult) {
        console.log(str + result);
    }
    else {
        return result;
    }
}
add(5, 2.8, true, "Total: ");
