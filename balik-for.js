function kataBalik(kata) {
    var msg = ''
    for(var i = kata.length-1; i >= 0; i--){
        msg = msg +kata[i]
    }
    return msg;
}
console.log(kataBalik("siap"))          // pais
console.log(kataBalik("bubur ayam"))   // maya rubub
console.log("===============================")
function balik(kalimat){
    var pesan = ''
    for(var i = kalimat.length-1; i >= 0;i--){
        pesan = pesan + kalimat[i]
    }
    return pesan;
}   
console.log(balik("saya mencoba balik kata"))     //atak kilab abocnem ayas
console.log(balik("saya sudah bisa balik kata"))  //atak kilab asib hadus ayas