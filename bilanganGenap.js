function bilanganGenap() {
    var genap = []
    for (var i = 1; i <= 30; i++){
        if(i%2 === 0) {
            genap.push(i)
        }
    }
    return genap
}
console.log(bilanganGenap())

function bilanganGanjil() {
    var ganjil = []
    for (var i = 1; i <= 30; i++) {
        if(i%2===1) {
            ganjil.push(i)
        }
    }
    return ganjil
}
console.log(bilanganGanjil())