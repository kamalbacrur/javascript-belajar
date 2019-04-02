function arrayPerulangan () {
    var kota = ['jakarta', 'bandung', 'palembang']
    var kotaBaru = kota.map(function(item,index,array){
        return "kota :" + item;
    })
    console.log(kotaBaru)

}
arrayPerulangan()

function perulnganMap() {
    var dataNama = ['kamal', 'yazid', 'ammar']
    var dataBaru = dataNama.map(function(item,index,array){
        return 'nama: ' + item ;
    })
    console.log(dataBaru)
}
perulnganMap()

function mengulangLagi () {
    var warna = ['merah', 'kuning','hijau']
    var warnaNew = warna.map(function(item, index, array){
        return 'warna : ' + item
    })
    console.log(warnaNew)
}
mengulangLagi()
