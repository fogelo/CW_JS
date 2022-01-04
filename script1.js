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

//? 3) Написать функцию, которая будет принимать строку и выводить строку из чисел соостветсвющих порядковому номеру в алфавите каждой букве

/*
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function alphabetPosition(text) {
    text = text.toLowerCase()
    textLetters = text.split('')
    console.log(textLetters)
    let numbers = []
    textLetters.forEach(item => {
        numbers.push(letters.indexOf(item, 0) + 1)
    });
    numbers = numbers.filter((item, index, array) => {
        return item > 0
    })
    console.log(numbers)
    numbers = numbers.map((item) => {
        return item + ''
    })
    numbers = numbers.join(' ')
    console.log(numbers, typeof numbers)
    text=numbers
    console.log(text)
    return text;
}
alphabetPosition("The sunset sets at twelve o' clock.")
*/


//? 4) Написать функцию, которая будет декодировать сигнал Морзе на английский язык
// decodeMorse('.... . -.--   .--- ..- -.. .')
/*
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z','sos','!','.']
let morseAlphabet = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..',
    '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.',
    '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..','...---...','--..--','......']
     */
decodeMorse = function (morseCode) {

    let numbers = []
    let sentence = []
    let arr = []
    arr = morseCode.split(' ')


    arr.forEach((item, index, arr) => {
        numbers.push(morseAlphabet.indexOf(item, 0) + 1)
    })
    if (numbers.length === 1) {
        console.log(alphabet[numbers[0] - 1].toUpperCase())
        return alphabet[numbers[0] - 1].toUpperCase().trim()
    } else {
        numbers.forEach((item, index, arr) => {
            if (item - 1 > 0) {
                sentence.push(alphabet[item - 1])

            } else {
                sentence.push(' ')
            }
        })
        sentence = sentence.join(' ')
        sentence = sentence.split('     ')
        sentence = sentence.map((item, index, arr) => {
            return item = item.split(' ').join('')
        })
        sentence = sentence.join(' ')
        //your code here
        sentence = sentence.toUpperCase()
        console.log(sentence)
        return sentence.trim()
    }
}
decodeMorse('...---... --..-- ......')
