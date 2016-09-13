function telephoneCheck(str) {
    var valid = false;
    // numnumnum + algo + num num num + algo + num num num num
    valid = str.search(/[0-9]{3}[0-9]{3}[0-9]{4}/) !== -1;
    console.log(str.search(/[0-9]{3}\d[0-9]{3}\d[0-9]{4}/));
    // console.log(valid);
    return valid;
}

// Valid formats 3 numbers, 3 numbers and 4 numbers
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("(555)555-5555");
