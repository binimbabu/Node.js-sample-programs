var jsonDiff = require('json-diff');



var jsonString1 = {
    "name":"prince",
    "age": "44",
    "marks": {
        "subject1":20,
        "subject2":45
    }
};
var jsonString2 = {
    "name":"Ebin",
    "age": "44",
    "marks": {
"subject1":21,
"subject2":45
    }
};

console.log(jsonDiff.diffString(jsonString1, jsonString2));