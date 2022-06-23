var v1 = {"name": "Mia", "age": 28};   
var v2 = ["Pink", "Maroon", "Black", "Gold"];
var v3 = [12, 22, 23, 24, 25];

let isObject = function(a) {
    return (a) && (a.constructor === Object);
};

console.log("If Array returns true otherwise return false");
console.log("v1", Array.isArray(v1));
console.log("v2", Array.isArray(v2));
console.log("v3", Array.isArray(v3));

console.log("If Object returns true otherwise return false");
console.log("v1", isObject(v1));
console.log("v2", isObject(v2));
console.log("v3", isObject(v3));