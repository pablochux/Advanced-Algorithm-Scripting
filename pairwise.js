function pairwise(arr, arg) {
    var counter = 0;
    var total = arr.reduce(function(previousValue, currentValue, currentIndex) {
        return (previousValue + currentValue === arg) ? currentIndex : 0;
    }, 0);
    // var newArr = arr.reduce(function(previousValue, currentValue, currentIndex) {
    //     if (previousValue + currentValue) {
    //         counter += currentIndex;
    //         return true;
    //     }
    //     return false;
    // });
    console.log(total);
    console.log(counter);
    return arr;
}
//
// function pairwise(arr, arg) {
//     // arr is an array and arg is a number
//     var keyCounter = 0;
//     // Search every element
//     for (var i = 0; i < arr.length; i++) {
//         // For each element, search for the pair
//         for (var j = 0; j < arr.length; j++) {
//             // No se sumen los mismos elementos
//             if (i !== j) {
//                 if (arr[i] + arr[j] === arg) {
//                     keyCounter += j + i;
//
//                     // Problema -> duplicación de elementos
//                     console.log('i: ' + i);
//                     console.log('j: ' + j);
//                     console.log(keyCounter);
//                 }
//             }
//         }
//     }
//     console.log(keyCounter);
//     return keyCounter / 2;
// }

pairwise([1, 4, 2, 3, 0, 5], 7); // 11 ((1 + 3) + (2 + 5))
