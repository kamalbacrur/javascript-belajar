// mencari index nya dari variabel str namun tidak bisa mencari dengan huruf selain yang ada di var nya(tidak boleh besar hurufnya,nanti akan error)
function regularExpress(value) {
    let str = "abcdefghijklmnopqrstuvwxyz"

    return str.search(/b/)
}
console.log(regularExpress())

function panggilexpress(value) {
    let str = "abcdefghijklmnopqrstuvwxyz"
    // tanpa menambahkan flag 
    console.log(str.search(/C/))
    // menambahkan flag 
    console.log(str.search(/R/i))
    console.log(str.search(/F/i))
}
panggilexpress() 

function match(value) {
    
    let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz"
    // didalam fungsi match mempunyai fungsi output untuk mengetahui indexnya dan iputan nya serta groupsnya
    console.log(str.match(/c/))
    console.log(str.match(/C/,/c/))
}
match()