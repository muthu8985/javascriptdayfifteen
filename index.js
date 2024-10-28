const objdes={
    fname:"muthu",
    lname:"kumar",
    age:23
};
let {fname,lname}=objdes;
document.write(fname+" "+lname);
// For potentially missing properties we can set default values:
const objdesc={
    firstname:"muthu",
    lastname:"kumar",
    age:23
};
let { firstname,lastname,country="us"}= objdesc;
document.write(firstname +" "+lastname + " "+country);

// object property alias (naming the object property to another name)
 const objprp=
 {
    name1:"muthu",
    name2:"kumar",
 };
 let {name1:myname} =objprp;
 document.write(myname)
//  One use for destructuring is unpacking string characters.

const ardes="muthukumar";
// des
let [m1,m2,m3,m4,m5]=ardes;
document.write(m2);
//  array destructuring 
const fruitdes=["apple","mango","orange","pineapple"]
let [frut1,frut2,frut3,frut4]= fruitdes;
document.write(frut4);
// skiping array values
const fruitskip=["apple","mango","orange","pineapple","lemon"]
let [frt1,frt2,,,frt4]=fruitskip;
document.write(frt4)
// getting array from index values
const school =["pen","pencil","scale","eraser"]
const {[0]:spen ,[1]:spencil}=school;
document.write(spen)
//  Destructuring the arrays in map 
const arrmap=new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
//    destructring
let detext =" ";
for (const [key, value] of arrmap) {
    detext += key + " is " + value;
  }
document.write(detext);
// swapping js variables also in the destructuring
  let course="React";
 let duration="three months";
//  swapping variables
[course,duration]=[duration,course];
document.write(course +" "+ duration)