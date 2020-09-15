// tuples //
var person = {
    name: "Satyaki",
    age: 27,
    hobbies: ["football", "cricket", "travelling"],
    role: [2, "author"]
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby.map()); this will through an error
    // as TS knows map cant be used on strings
    console.log(hobby.toUpperCase()); // TS knows hobby is a string and hence allows this method
}
