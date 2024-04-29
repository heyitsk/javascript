const course = {
    courseName : "abc",
    price : 399,
    courseInstructor : "kushagra",
}
console.log(course.courseInstructor);
// this method is fine but writing the whole course.courseInstructor is lengthy sometimes and code looks unclean. So we do destructuring 

const {courseInstructor}= course;
//now no need to write full just write courseInstructor
console.log(courseInstructor);
// we can further shorten the courseInstructor 
const {courseInstructor:inst}= course;
console.log(inst);



//*********JSON**********
// {
//     "id":"123abc",
//     "name":"kush",
//     "price":
// }
//or
// //[
//     {},
//     {},
//     {},
// ]
