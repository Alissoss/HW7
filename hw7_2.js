/*Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки
 унікальні значення з обох масивів (без дублікатів).
 */
 const uniqueValues = (array1, array2) => [...new Set([...array1, ...array2])];
 const array1 = [1, 2, 3, 4, 5];
 const array2 = [3, 4, 5, 6, 7];
 const uniqueValuesArray = uniqueValues(array1, array2);
 console.log(uniqueValuesArray);