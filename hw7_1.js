//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray => originalArray.slice().reverse();
const reverseArray = reversedArray(originalArray);
console.log(reverseArray); 
//Це якщо дані originalArray потрібно зберегти на майбутнє
/* Якщо дані originalArray можна змінити, то:
const originalArray = [1, 2, 3, 4, 5];
originalArray.reverse();
console.log(originalArray);
*/
