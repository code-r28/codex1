//obj function method
let person={
    Name:"KH",
    age:23,
    greet:function(){
        console.log("Hey, Buddy " +this.Name)
    }
};
person.greet();
