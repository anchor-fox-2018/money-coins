function convertToCoin(input) {
    var coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1], result = [];
    for (let coin in coins) {
        while (input >= coins[coin]) {
            result.push(coins[coin]) ;
            input -= coins[coin];
        }
    }
    return result;
}

//test
console.log(convertToCoin(100));
console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));