// ==   :- compare the value,  ===   :- compare the type, triple equal to known as strict eqaulity
// !=   :- not equal 
// !==  :- not equal type


// operator 

// &&  if one values true and the other values false it returns false in AND operator.
// ||  if any one value is true and another value is false then it returns true in OR operator.



const userAge = 15;

const isCollegeStudent = (userAge >= 18) && (userAge <= 24);
console.log(isCollegeStudent);  // flase 

const isSchoolStudent = (userAge >= 5) && (userAge <= 18);
console.log(isSchoolStudent); // true 


const isStudent = isCollegeStudent || isSchoolStudent
console.log(isStudent);
