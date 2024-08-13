class Student {
    constructor(roll , name) {
        this.name = name ;
        this.roll = roll ;
    }
}

let s1 = new Student(23 , "Maya" );
// console.log(s1);

// let s2  =  s1 ;
// let s2 = JSON.parse(JSON.stringify(s1));
// let s2 = new Student( s1.roll , s1.name);

let s2 = Object.create(Student.prototype);
s2.name = s1.name ;
s2.roll = 3 ;

console.log("s1 - " , s1);
console.log("s2 - " , s2);




// // one Right way 
// let s2 = new Student( s1.roll , s1.name);

// s2.roll = 3 ;

// console.log("s1 - " , s1);
// console.log("s2 - " , s2);