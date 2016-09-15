// Recive: two arrays and -> Return: the symetric difference of the two parameters as a new arr
function symDifference() {
    var symArr = [],
        loopArrKey;
    // loop through the arguments array
    for (var i = 0; i < arguments.length; i++) {
        // loop through each array
        for (var j = 0; j < arguments[i].length; j++) {
            // loopArr is the array key to check for the elem (the opposite of the actual looping array)
            loopArrKey = (i === 1) ? 0 : 1;
            // If the element is not in the other array and it's not already in teh symArr
            if ((arguments[loopArrKey].indexOf(arguments[i][j]) === -1) && (symArr.indexOf(arguments[i][j]) === -1)) {
                symArr.push(arguments[i][j]);
            }
        }
    }
    return symArr;
}

// Receive: multiple arrays (assume min 2 arrays) and -> Return: the symetric difference of all of them
function sym(args) {
    var newArr = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        newArr = symDifference(newArr, arguments[i]);
    }
    return newArr;
}

// Test cases
sym([1, 2, 3], [5, 2, 1, 4]); // should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]); // should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // should contain only eight elements.
