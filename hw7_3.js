/*Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів
 (ім'я, вік, середній бал) і повертає середній бал усіх студентів.*/
 const calculateAverageGrade = students => {
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
    return totalGrade / students.length;
};
const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];
console.log(calculateAverageGrade(students));