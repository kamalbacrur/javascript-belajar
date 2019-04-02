console.log("array-filter adalah array yang digunakan untuk memfilter data dalam array sesuai dengan item yang ingin difilter")
function arrayFilter() {
    var negara = [{negara : "jepang", benua : "asia"},
                  {negara : "malaysia", benua : "asia"},
                  {negara : "inggris", benua : "eropa"},
                  {negara : "canada" , benua : "amerika"},
                  {negara : "zimbabwe" , benua : "afrika"}

    ];
    var benuaAsia = negara.filter(function(item){
        return item.benua === "asia";
    });
    return benuaAsia;
}
console.log(arrayFilter())
console.log("=======================================================")
function cobalagi() {
    var kelas = [{nama : "kamal" , kelas : "XI-RPL"},
                 {nama : "nuratika", kelas : "XI-AK2"},
                 {nama : "putri silvana" , kelas : "XI-PM2"},
                 {nama : "yazid amirullah", kelas : "XI-RPL"},
                 {nama : "fadhil rabbani", kelas : "XI-RPL"}
    ];
    var kelasRPL = kelas.filter(function(item){
        return item.kelas === "XI-RPL";
    });
    return kelasRPL;
}
console.log(cobalagi())
console.log("=================================================")
function cobaFilter() {
    var mobil = [{merk : "honda", tipe : "jazz"},
                 {merk : "mitsubishi", tipe : "xpander"},
                 {merk : "honda" , tipe : "hrv"},
                 {merk : "toyota", tipe : "avanza"} 
                ];
    var namaMobil = mobil.filter(function(item){
        return item.merk === "honda";
    });
    return namaMobil;
}
console.log(cobaFilter())