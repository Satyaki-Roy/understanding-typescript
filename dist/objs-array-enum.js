"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    name: "Satyaki",
    age: 27,
    hobbies: ["football", "cricket", "travelling"],
    role: Role.ADMIN,
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === 0)
    console.log("Person is a ADMIN user");
