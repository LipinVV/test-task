const scriptToTest = require('./index');

test("Test 1: when all values are numbers", () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    expect(scriptToTest.calculationHandler(arr)).toBe(3);
})

test("Test 2: when all elements are strings", () => {
    const arr = ['3','4','6','7','8','9']
    expect(scriptToTest.calculationHandler(arr)).toBe('elements are nor valid');
})

test("Test 3: when some elements are strings", () => {
    const arr = [12, '1', '-10', 0, 6, 1, '5']
    expect(scriptToTest.calculationHandler(arr)).toBe(1);
})

test("Test 4: when empty array", () => {
    const arr = [];
    expect(scriptToTest.calculationHandler(arr)).toBe('elements are nor valid');
})