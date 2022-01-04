/*§CW_JS*/

/*?1. написать функцию, которая из строки будет делать hashtag*/

/*
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

/*

//my solution
function generateHashtag(str) {
    if (str === "") return false
    let arr = str.split(/\s+/).filter((item) => {
        if (item) {
            return item
        }
    })
    let str2 = arr.join(" ")
    if (str2.length >= 140) return false
    let hashTag = "#" + arr.map((item) => {
        if (item) {
            return item[0].toUpperCase() + item.slice(1)
        }
    }).join('')
    if (hashTag === "#") return false
    else return hashTag
}
const result = generateHashtag("         ")
console.log(result)
*/

/*
//best practices
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
        '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
*/


