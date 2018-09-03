function convertToCoin(angka) {
    let arr = [10000, 5000, 2000, 1000, 500, 200, 50, 20, 10, 1];
    let buffer = [];
    while (angka !== 0) {
        for (let j = 0; j < arr.length;) {
            if (arr[j] <= angka) {
                buffer.push(arr[j]);
                angka = angka - arr[j];
            }
            else {
                j++;
            }
        }
    }
    return buffer;
}
console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));