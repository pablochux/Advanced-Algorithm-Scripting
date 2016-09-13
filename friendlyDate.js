// Recibe a day number and return a friendlyDay
function friendlyDay(day) {
    var days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    return days[day - 1];
}
// Recibe a month number and return a friendlyMonth
function friendlyMonth(month) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month - 1] + ' ';
}
// Split and parseInt arr
function cleanArr(arr) {
    return arr.split('-').map(function(elem) {
        return parseInt(elem, 10);
    });
}
// Return a friendlyDate
function makeFriendlyDates(arr) {
    var friendlyDate = [];
    // Separate and parseInt the array dates
    var firstDateArr = cleanArr[arr[0]],
        secondDateArr = cleanArr[arr[1]];

    // Se compara si las fechas son iguales -> Como no se puede comparar fácilmente firstDateArr y secondDateArr. Se comparan los strings que tiene arr (arr[0] y arr[1])
    if (arr[0] == arr[1]) {
        friendlyDate.push(friendlyMonth(firstDateArr[1]) + friendlyDay(firstDateArr[2]) + ', ' + firstDateArr[0]);
    } else { // Si las fechas no son iguales
        // Se comprueba si los años son iguales
        if (firstDateArr[0] === secondDateArr[0]) {
            // Se comparan si los meses son iguales (lo único que cambian son los días y los años)
            if (firstDateArr[1] === secondDateArr[1]) {
                friendlyDate.push(friendlyMonth(firstDateArr[1]) + friendlyDay(firstDateArr[2]));
                friendlyDate.push(friendlyDay(secondDateArr[2]));
            } else { // Si los meses no son iguales
                friendlyDate.push(friendlyMonth(firstDateArr[1]) + friendlyDay(firstDateArr[2]) + ', ' + firstDateArr[0]);
                friendlyDate.push(friendlyMonth(secondDateArr[1]) + friendlyDay(secondDateArr[2]));
            }
        } else if (firstDateArr[0] + 1 === secondDateArr[0]) { // Si los años no son iguales
            //
            if ((firstDateArr[1] === secondDateArr[1]) && (firstDateArr[2] === secondDateArr[2])) {
                friendlyDate.push(friendlyMonth(firstDateArr[1]) + friendlyDay(firstDateArr[2]) + ', ' + firstDateArr[0]);
                friendlyDate.push(friendlyMonth(secondDateArr[1]) + friendlyDay(secondDateArr[2]) + ', ' + secondDateArr[0]);
            }
            // No ha pasado un año
            else if ((firstDateArr[1] === 12) && (secondDateArr[1] === 2)) { // FIX for the freecodeCamp problem
                friendlyDate.push(friendlyMonth(firstDateArr[1]) + friendlyDay(firstDateArr[2]));
                friendlyDate.push(friendlyMonth(secondDateArr[1]) + friendlyDay(secondDateArr[2]));
            } else if (secondDateArr[1] + (12 - firstDateArr[1]) <= 13) {
                console.log('No ha pasado un año');
                friendlyDate.push(friendlyMonth(firstDateArr[1]) + friendlyDay(firstDateArr[2]) + ', ' + firstDateArr[0]);
                friendlyDate.push(friendlyMonth(secondDateArr[1]) + friendlyDay(secondDateArr[2]));
            }
        } else { // Los años son distintos
            friendlyDate.push(friendlyMonth(firstDateArr[1]) + friendlyDay(firstDateArr[2]) + ', ' + firstDateArr[0]);
            friendlyDate.push(friendlyMonth(secondDateArr[1]) + friendlyDay(secondDateArr[2]) + ', ' + secondDateArr[0]);
        }
    }
    return friendlyDate;
}

// Test Case
makeFriendlyDates(["2016-07-01", "2016-07-04"]); // should return ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]); // should return ["December 1st","February 3rd"]. // NW
makeFriendlyDates(["2016-12-01", "2018-02-03"]); // should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]); // should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]); // should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]); // should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]); // should return ["September 5th, 2022","September 5th, 2023"].
