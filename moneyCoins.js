//1,10,20,50,100,200,500,1000,2000,5000,10000

function convertToCoin(num) {
  var koin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  var remaining = num;
  var result = [];

  for (var i = 0; i < koin.length; i++) {
    while (koin[i] <= remaining) {
      result.push(koin[i]);
      remaining -= koin[i]
    }
  }
  return result;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
