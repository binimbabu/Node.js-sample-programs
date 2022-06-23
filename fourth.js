const a = {"name" : "Bini", "age":"22"};

let b = JSON.parse(JSON.stringify(a));

b.name = "Babu";
b.age = "44";

if(a === b)
console.log("Both are same");

else
console.log("a's Name and age is " + `${a.name}` + "," + `${a.age}` + "are different because b is " + `${b.name}` + "," + `${b.age}`);