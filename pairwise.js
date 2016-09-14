// Find pair elements
function pairwise(arr, arg) {
    // arr is an array and arg is a number
    var keyCounter = 0,
        keyUsedItems = [];
    // Search every element in the array
    for (var i = 0; i < arr.length; i++) {
        // For each element, search for the pair
        for (var j = 0; j < arr.length; j++) {
            // Se comprueba que los indices no sean iguales (para que no se sumen los elementos), que ninguno de los elementos haya sido utilizado y que la suma de los elementos sea igual que arg
            if ((i !== j) && (keyUsedItems.indexOf(i) === -1) && (keyUsedItems.indexOf(j) === -1) && (arr[i] + arr[j] === arg)) {
                // Se añaden los elementos utilizados para que no se repitan
                keyUsedItems.push(i, j);
                keyCounter += j + i;
            }
        }
    }
    return keyCounter;
}

// Test cases
pairwise([1, 4, 2, 3, 0, 5], 7); // should return 11.
pairwise([1, 3, 2, 4], 4); // should return 1.
pairwise([1, 1, 1], 2); // should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1); // should return 10.
pairwise([], 100); // should return 0.
