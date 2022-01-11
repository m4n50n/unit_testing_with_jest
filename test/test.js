// Import functions
const { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound } = require("./app.js");

/**
 * Tests definition
 * Before this, add "jest --detectOpenHandles" to scripts -> test node in the package.json file
 * https://jestjs.io/es-ES/docs/api#describename-fn
 * https://jestjs.io/docs/expect
 */
describe("Sum", () => {
    test("Adds 14 + 9 to equal 23", () => {
        let total = sum(14, 9); // Call function
        expect(total).toBe(23); // Expect result: 23
    });
});

const InitialEuros = 3.5;

describe("Convert values", () => {
    test("3.5 euro should be 3.99 dollars", () => {
        let dollar  = fromEuroToDollar(InitialEuros); 
        expect(dollar).toBe(3.99);
    });

    test("3.99 dollars should be 459.03 yens", () => {
        let yen  = fromDollarToYen(fromEuroToDollar(InitialEuros)); 
        expect(yen).toBe(459.03);
    });

    test("459.03 yens should be 2.91 pounds", () => {
        let pound  = fromYentoPound(fromDollarToYen(fromEuroToDollar(InitialEuros))); 
        expect(pound).toBe(2.91);
    });
});
