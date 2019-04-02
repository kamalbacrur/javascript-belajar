// menggunakan array-splice fungsi nya adalah untuk menambahkan data di array no 2 ,terus kalo 0 fungsinya supaya data yang lainnya gak ilang 
function arraySplice () {
    var kota = ['jakarta','medan','surabaya','bandung']
    console.log(kota)
    kota.splice(0,0,'palembang','kupang')
    return kota
}
console.log(arraySplice())

console.log("========================================")
function arrayHapusSplice () {
    var kota = ['jakarta','medan','surabaya','bandung'];
    console.log(kota)
    kota.splice(0,2)
    return kota
}
console.log(arrayHapusSplice())