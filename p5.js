//Removing
const person = {
    Name:"KH",
    AGe:234,
    Gender:"Male",
    Marks:{
        M1:23,
        M2:234,
        M3:2345,
    },
    Sub:["ENG","Mat","PHY"]
};
console.log(person);

//After changes
delete person.AGe;
delete person["Marks"]["M2"];
delete person.Sub[0];

console.log(person);
