// Import functions
const { sum, fromEuroToDollar, fromDollarToYen, fromYantoPound } = require("./app.js");

/**
 * Tests definition
 * https://jestjs.io/es-ES/docs/api#describename-fn
 */
describe("Sum", () => {
    test("Adds 14 + 9 to equal 23", () => {
        let total = sum(14, 9); // Call function
        expect(total).toBe(23); // Expect result: 23
    });
});

describe("Convert values", () => {
    test("One euro should be 1.13 dollars", () => {
        let euro  = fromEuroToDollar(3.5); 
        expect(euro).toBe(3.95);
    });

    test("One dollar should be 130.2 yens", () => {
        let euro  = fromDollarToYen(fromEuroToDollar(3.5)); 
        expect(euro).toBe(514.29);
    });

    test("One euro should be 0.83 pounds", () => {
        let euro  = fromYantoPound(fromDollarToYen(fromEuroToDollar(3.5))); 
        expect(euro).toBe(426.86);
    });
});
