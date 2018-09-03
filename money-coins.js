function convertToCoin(number){
    var coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
    var output = [];
    for(var i = 0; i < coins.length; i++){
        if(number/coins[i]>1){
            var count = Math.floor(number/coins[i]);
            for(var j = 0; j<count; j++){
                output.push(coins[i]);
            }
            number -= count*coins[i];
        }
    }
    console.log(output);
}

convertToCoin(543);