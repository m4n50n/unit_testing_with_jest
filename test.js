// Import Sum() function
const { sum, fromEuroToDollar, fromDollarToYen, fromYantoPound } = require("./app.js");

// First test
test("Adds 14 + 9 to equal 23", () => {
    // Call function
    let total = sum(14, 9);

    // Expect result: 23
    expect(total).toBe(23);
});

// Second test
test("One euro should be 1.13 dollars", () => {
    let euro  = fromEuroToDollar(3.5); 
    expect(euro).toBe(3.95); // 1 € = 1.2 $ --> 3.5 * 1.2
});

test("One dollar should be 130.2 yens", () => {
    let euro  = fromDollarToYen(fromEuroToDollar(3.5)); 
    expect(euro).toBe(514.29);
});

test("One euro should be 0.83 pounds", () => {
    let euro  = fromYantoPound(fromDollarToYen(fromEuroToDollar(3.5))); 
    expect(euro).toBe(426.86);
});
