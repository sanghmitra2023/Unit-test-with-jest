test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    // if 1 euro is 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be 106.58333 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(3.5)
    // if 1 dollar is 106.58333 yens, then 3.5 dollars should be (3.5 * 106.58333)
    const expected = 3.5 * 106.58333; 
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe("373.04167");
});

test("One yen should be 0.00625 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(3.5)
    // if 1 yen is 0.00625 pounds, then 3.5 yens should be (3.5 * 0.00625 )
    const expected = 3.5 * 0.00625; 
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe("0.02189");
});