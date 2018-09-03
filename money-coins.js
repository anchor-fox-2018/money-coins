function convertToCoin(angka){
    var arrayAngka = String(angka).split('');
    var panjangArray = arrayAngka.length
    var hasil = [];
    var pembanding =[50000,10000,5000,2000,1000,500,200,100,50,20,10,1];
    for(var i = 0;i < arrayAngka.length;i++){
        //var hasilPecah = []
        var hasilPuluhan = arrayAngka[i];
        for(var j = i+1;j < arrayAngka.length;j++){
          hasilPuluhan+= '0'  
        }
        
        hasil.push(Number(hasilPuluhan))
    }
    var hasil2 = []
    for(var i = 0;i < hasil.length;i++){
        var sisa = hasil[i]
        
            for(var j = 0;j < pembanding.length;j++){
                if(sisa >= pembanding[j]){
                    hasil2.push(pembanding[j]);
                    sisa -= pembanding[j];
                    j = 0
                    //console.log(sisa,'p  ',pembanding[j])
                }
            }
        
    }
    return hasil2
}