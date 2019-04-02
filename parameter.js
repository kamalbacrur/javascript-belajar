console.log("====contoh mencoba tanpa parameter===")
function parameter () {
    console.log("jakarta");
}
parameter()
console.log("====contoh menggunakan 1 parameter saja ===")
function satuParameter (parameter1) {
    console.log(parameter1)
}
satuParameter("bandung")
console.log("====contoh menggunakan lebih dari 1 parameter====")
function lebihParameter (parameter1, parameter2, parameter3) {
    console.log(parameter1)
    console.log(parameter2)
    console.log(parameter3)
}
lebihParameter("makassar", "bogor", "ambon")
console.log("====contoh gabungan dari data data dalam parameter===")
function gabunganParameter (idNomor, dataKota) {
    console.log(idNomor)
    console.log(dataKota)
}
gabunganParameter(1000103, ["jakarta", "makassar", "bandung"])