//Operaciones Logicas AND
//        0        0
var and = 5>10 && 5==2;
console.log(and);

//        0        1
var and = 2>10 && 10==10;
console.log(and);

//        1       0
var and = 20>10 && 5==2;
console.log(and);

//        1        1
var and = 35>5 && 1==1;
console.log(and);

console.log("-------")

//Operaciones Logicas OR
//        0        0
var or = 100<10 || 5==6;
console.log(or);

//        0        1
var or = 100<10 || 10==10;
console.log(or);

//        1        0
var or = 1==1 || 5<0;
console.log(or);

//        1        1
var or = 1==1 || 200>100;
console.log(or);