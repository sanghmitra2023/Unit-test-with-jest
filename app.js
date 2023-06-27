const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yen
    let valueInYen = ((valueInDollar/1.2)*127.9).toFixed(5);
    //return the yen value
    return valueInYen;
    
}
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInPound = ((valueInYen/127.9)*0.8).toFixed(5);
    //return the pound value
    return valueInPound;
}



module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};
