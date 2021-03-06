// Variables
const oneEuroIs = {
    "JPY": 131.15, // Japan yen
    "USD": 1.14, // US dollar
    "GBP": 0.83, // British pound
}

// Functions
const sum = (a, b) => a + b;

const fromEuroToDollar = euro => parseFloat((euro * oneEuroIs.USD).toFixed(2));

const fromDollarToYen = dollar => parseFloat(((oneEuroIs.JPY / oneEuroIs.USD) * dollar).toFixed(2));

const fromYentoPound = yen => parseFloat(((oneEuroIs.GBP / oneEuroIs.JPY) * yen).toFixed(2));

// Export functions
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };
