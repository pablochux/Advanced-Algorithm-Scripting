// Sort an inventory alphabetically
function orderAZ(inventory) {
    return inventory.sort(function(a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });
}
// Search if an element is in and array
function isInInventory(arr1, element) {
    found = false;
    for (var j = 0; j < arr1.length; j++) {
        console.log('Array: ' + arr1[j][1]);
        console.log('Element: ' + element);
        found = (arr1[j][1] === element);
        console.log(found);
        if (found) {
            console.log('FOUND');
            console.log(j);
            break;
        }
    }
    return (found) ? j : false;
}
// Update the inventory
function updateInventory(arr1, arr2) {
    // Search the fresh inventory
    for (var i = 0; i < arr2.length; i++) {
        // Search if arr[i][1] is found in arr
        var position = isInInventory(arr1, arr2[i][1]);
        console.log('Position: ' + position);
        // If is in inventory, position will be a number. If not, position will be false
        // Not check with 0, because position can be 0 (not meaning false)
        if (position !== false) {
            // Update the inventory (add the new inventory to the old one)
            arr1[position][0] += arr2[i][0];
        } else {
            // Add to the inventory
            arr1.push(arr2[i]);
        }
    }
    return orderAZ(arr1);
}

// Test case
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
