// Variables
let oneEuroIs = {
    "JPY": 130.2, // Japan yen
    "USD": 1.13, // US dollar
    "GBP": 0.83, // British pound
}

// Functions
const sum = (a, b) => {
    return a + b;
}

const fromEuroToDollar = (euro) => {
    return parseFloat((euro * oneEuroIs.USD).toFixed(2));
}

const fromDollarToYen = (dollar) => {
    return parseFloat((dollar * oneEuroIs.JPY).toFixed(2));
}

const fromYantoPound = (yan) => {
    return parseFloat((yan * oneEuroIs.GBP).toFixed(2));
}

// Export functions
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYantoPound };
