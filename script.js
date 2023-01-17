/*1.How to compare two JSON have the same properties without order?
a.let obj1={name:"Person 1",age:5};
b.ler obj2={age:5,name:"Person 1"};*/

const obj1 = {name:"Person 1", age:5};
const obj2 = {age:5, name:"Person 1"};

const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.keys(obj2);

if (obj1Keys.length !== obj2Keys.length) {
    console.log('Objects have different properties');
} else {
        console.log('Objects have same properties');
}

//output:Objects have same properties

/*2.Use the rest countries API URL->https://restcountries.com/v3.1/all and display all the country
flags in the console*/

var request= new XMLHttpRequest();
request.open("GEt","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    for (var i = 0; i < result.length; i++) {
        console.log(result[i].flags);
    }
/*3.Use the same rest countries and print all countries names, region, sub-region and population*/
for (var i = 0; i < result.length; i++) {
    console.log("Name:"+result[i].name +",Region:"+ result[i].region +",sub-region:"+ result[i].subregion+",population:"+result[i].population);
}
}

