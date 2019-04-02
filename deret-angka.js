function deretAngka(n) {
    var HasilDeretAngka = '';
    for (var i = 1 ; i <= n ; i++) {
        if(i % 3 === 0){
            HasilDeretAngka += "SOFT "
        } else if (i% 5 === 0) {
            HasilDeretAngka += "WARE "
        } else{
            HasilDeretAngka += i+ ""
        }
    }
    return HasilDeretAngka
}
console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))