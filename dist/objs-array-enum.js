"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: "Satyaki",
    age: 27,
    hobbies: ["football", "cricket", "travelling"],
    role: Role.ADMIN,
};
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === 0)
    console.log("Person is a ADMIN user");
