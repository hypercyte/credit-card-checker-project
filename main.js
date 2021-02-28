// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Custom credit card number input.
const custom = "5123034878794809";

// Parse the custom number into a readable array.
const parsed = custom.split('').map(n => {
    return parseInt(n, 10);
})
// ^ custom.split splits up the string into an array similar to the ones at the start of the file.
// ^ then the .map takes all values of the array created by .split, and parses them into ints into a new array of ints, identical to the ones at the start.

const validateCred = arr => {

    let sum = 0;

    // This will be used for checking every other element regardless of array length.
    const every_other = arr.length % 2;

    // Loop through every element in array.
    for (let i = arr.length - 1; i >= 0; i-- ) {

        // Excluding checking digit (last element).
        if (i === arr.length - 1) {
            sum += arr[i];
            continue;
        }

        let cur = arr[i]

        // Checking every other digit. If more than 10, - 9 from result.
        if (i % 2 === every_other) {
            cur *= 2;
            if (cur >= 10) cur -= 9;
        }
        
        sum += cur;
    }
    
    return (sum % 10 === 0 ? true : false);
}

const findInvalidCards = arr => {
    const new_arr = []; // Invalid card array

    // Loop through every card...
    for (var a of arr) {
        // If card is not valid...
        if (!validateCred(a)) {
            // Add card number to invalid card array.
            new_arr.push(a);
        }
    }

    return new_arr;
}

const i_cards = findInvalidCards(batch);

const idInvalidCardCompanies = arr => {
    const new_arr = [];

    // Loop through elements in the invalid card array
    arr.forEach(card => {
        switch(card[0]){
            case 3:
                console.log("Company match found: Amex")
                if (!new_arr.includes("Amex (American Express)")) {
                    new_arr.push("Amex (American Express)");
                }
                break;
            case 4:
                console.log("Company match found: Visa.")
                if (!new_arr.includes("Visa")) {
                    new_arr.push("Visa");
                }
                break;
            case 5:
                console.log("Company match found: Mastercard.")
                if (!new_arr.includes("Mastercard")) {
                    new_arr.push("Mastercard");
                }
                break;
            case 6:
                console.log("Company match found: Discover.")
                if (!new_arr.includes("Discover")) {
                    new_arr.push("Discover");
                }
                break;
            default:
                console.log("Company match not found.")
                break;
        }
    });

    return new_arr;
}
