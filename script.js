/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

let newArr = arr.map(function PrintStudentswithMap(student) {
    return student.marks>50;
});
console.log(newArr);

let newValue = arr.forEach(function PrintStudentsbyForEach(score){
  return score.marks;
});
console.log(newValue);

function addData() {
  //Write your code here, just console.log
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}
