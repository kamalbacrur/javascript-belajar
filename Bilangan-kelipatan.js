console.log("bilangan keliapatan 5")
function bilanganKelipatan() {
    var angka = []
    for (var i = 1; i <= 60 ; i++) {
        if (i%5 === 0) {
            angka.push(i)
        }
    } 
    return angka
}
console.log(bilanganKelipatan())