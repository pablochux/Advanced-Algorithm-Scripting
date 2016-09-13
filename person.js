var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;

    // Methods
    this.getFullName = function() {
        return this.fullName;
    };
    this.getLastName = function() {
        return this.lastName;
    };
    this.getFirstName = function() {
        return this.firstName;
    };
    this.setFirstName = function(first) {
        this.firstName = first;
    };
    this.setFullName = function(firstAndLast) {
        this.fullName = firstAndLast;
    };
};

Person.prototype.setLastName = function(last) {
    this.lastName = last;
};

// var bob = new Person('Bob', 'Ross');
// bob.getFullName();
// console.log(bob.getFullName());
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// bob.setLastName("Haskell");
// console.log(bob.getFullName());
// // console.log(Object.keys(bob));
//
