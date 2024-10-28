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