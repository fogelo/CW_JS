/*§CW_JS*/

/*?1. написать функцию, которая из строки будет делать hashtag*/

/*
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

/*

//@my solution
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
//@best practices
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
        '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
*/

/*?2. formatDuration*/

/*
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
*/

/*

//@моя попытка решения
function formatDuration(seconds) {
    let years = Math.floor(seconds / 31536000)
    seconds = seconds - years * 31536000
    console.log(years)
    let days = Math.floor(seconds / 86400)
    seconds = seconds - days * 86400
    console.log(days)

    let hours = Math.floor(seconds / 3600)
    console.log(hours)
    seconds = seconds - hours * 3600
    let minutes = Math.floor(seconds / 60)
    console.log(minutes)
    seconds = seconds - minutes * 60
    console.log(seconds)


    let yearsStr = years > 1 ? years + ' years' : years === 1 ? years + ' year' : ""
    let comaOrAnd1 = (years && days && !hours && !minutes && !seconds) ? ' and'
        : (years && !days && hours && !minutes && !seconds) ? ' and'
            : (years && !days && !hours && minutes && !seconds) ? ' and'
                : (years && days && !hours && !minutes && !seconds) ? ", "
                : (!years && days && !hours && !minutes && !seconds) ? " " : ", "


    let comaOrAnd2 = (years || days && hours && !minutes && !seconds) ? ' and' : (years || days && hours || minutes || seconds) ? ", " : ""
    let comaOrAnd3 = (years || days || hours && minutes && !seconds) ? ' and' : (years || days || hours && minutes && seconds) ? ", " : ""
    let comaOrAnd4 = (years || days || hours || minutes && seconds) ? ' and ' : ""

    let daysStr = days > 1 ? days + ' days' : days === 1 ? days + ' day' : ""
    let hoursStr = hours > 1 ? hours + ' hours' : hours === 1 ? hours + ' hour' : ""
    let minutesStr = minutes > 1 ? minutes + ' minutes' : minutes === 1 ? minutes + ' minute' : ""
    let secondsStr = seconds > 1 ? seconds + ' seconds' : seconds === 1 ? seconds + ' second' : ""

    let result = yearsStr + comaOrAnd1 + daysStr + comaOrAnd2 + hoursStr + comaOrAnd3 + minutesStr + comaOrAnd4 + secondsStr


    console.log(result)
    return result
}
*/
/*
//@нашел решение в интернете
function formatDuration (seconds) {
    if ( seconds === 0 ) return 'now' ;
    var typeArr = ['year','day','hour','minute','second'] ;
    var sec = 0 ;
    var minute = 0 ;
    var hour = 0 ;
    var day = 0 ;
    var year = 0 ;
    minute = Math.floor(seconds / 60) ;
    sec = seconds % 60 ;

    hour = Math.floor(minute / 60) ;
    minute = minute % 60 ;

    day = Math.floor(hour / 24) ;
    hour = hour % 24 ;

    year = Math.floor(day / 365) ;
    day = day % 365 ;

    var resultArr = [year,day,hour,minute,sec] ;
    var resultStrArr = [] ;
    for ( var i = 0 ; i < resultArr.length ; i ++ ){
        if ( resultArr[i] === 1 ){
            resultStrArr.push(resultArr[i]+' ' + typeArr[i]) ;
        } else if ( resultArr[i] >= 2 ){
            resultStrArr.push(resultArr[i]+' ' + typeArr[i]+'s') ;
        }
    }
    var resultStr = '' ;
    for ( var i = 0 ; i < resultStrArr.length ; i ++ ){
        if ( i === resultStrArr.length - 2 ){
            resultStr += resultStrArr[i] + ' and ' + resultStrArr[i+1] ;
            break ;
        }
        if ( i !== resultStrArr.length -1 ){
            resultStr += resultStrArr[i] + ', ' ;
        } else {
            resultStr += resultStrArr[i];
        }
    }
    return resultStr ;
}
*/
/*
//@best practices
function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds/time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
*/
// formatDuration(1)
/*



/*
?3. Holiday VIII - Duty Free
!8 kyu
*/

/*
function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice * discount / 100))
}

dutyFree(12, 50, 1000)
*/


/*
?4. Well of Ideas - Easy Version
!8 kyu
*/

/*
function well(x) {
    let goodIdeas = x.filter((item) => item === 'good')
    if (goodIdeas.length === 1 || goodIdeas.length === 2) {
        return 'Publish!'
    } else if (goodIdeas.length > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}
*/

/*
?5. BASIC: Making Six Toast.
!8 kyu
*/

/*
function sixToast(num) {
    return Math.abs(num-6)
}
*/


/*
?6. Sentence Smash
!8 kyu
*/

/*
function smash (words) {
    return words.join(" ")
}
*/

/*
?7. MakeUpperCase
!8 kyu
*/

function makeUpperCase(str) {
    return str.toUpperCase()
}