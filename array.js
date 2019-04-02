function belajarArray () {
    var data = [1,3,5,7,9,11,13]
    var nama = ["kamal", "tika", "umi", "ammar"]

    console.log(data.length)
    console.log(nama.length)

    console.log("keluar nya adalah nama", nama[1])
}
belajarArray();
console.log("=====================================")
function array () {
    var anggota = ["kamal", "yazid", "ammar", "rahmat", "matius"]
    var kerjaan = ["enggineering", "bank", "percetakan", "peternakan", "guru"]

    console.log("namanya adalah", anggota[3]);
    console.log("kerjaan adalah" , kerjaan[3])
}
array();
console.log("=======================================");
function nestedArray() {
    var anggota = [["Yazid", "kumbang", "ammar"],
                   ["dua", "tiga", "empat"],
                   [2,4,6,8,10]]
    console.log("cetak :", anggota[0][2])
}
nestedArray();
console.log("=======================================")
function arrayPercabangan() {
    var team = [[0,7,9,5,4],
                ["kamal","bacrur", "rozikin"],
                ['a','b','c','d']]
    console.log(team.length);
    console.log("cetaknya adalah:", team[2][1]);
}
arrayPercabangan();