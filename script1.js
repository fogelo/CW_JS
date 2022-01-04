//? 1) Написать функцию, чтобы она высчитывала сумму как написано ниже
/*
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */
/*
//Мое решение
function calculator(number) {
    string = String(number)
    console.log(string, typeof string)
    stringsArray = string.split('')
    console.log(stringsArray, typeof stringsArray)

    let numbersArray = stringsArray.map((item, index, arr) => {
        return +item
    })
    console.log(numbersArray)

    arraySum = numbersArray.reduce((previousValue, currentItem, index, arr) => {
        return previousValue + currentItem
    }, 0)
    console.log(arraySum)
    if (arraySum < 10) {
        return arraySum
    } else {
        calculator(arraySum)
    }
}

calculator(752)
*/

//? 2) Написать функцию, которая будет форматировать введеный номер так как написано ниже
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

/*
function createPhoneNumber(numbers) {

    let strings = numbers.map((item, index, arr) => {
        return item + ''
    })
    let number = '(' + strings[0] + strings[1] + strings[2] + ')' + ' '
    + strings[3] + strings[4] + strings[5] + '-' + strings[6] + strings[7] + strings[8] + strings[9]
    return number

}
let number = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(number)
 */