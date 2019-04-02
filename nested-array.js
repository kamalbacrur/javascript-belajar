function panngilNestedArray (value) {
    for (var i = 0; i< value.length; i++){
        console.log ('id :' , value [i][0])
        console.log('nama :',value [i][1])
        console.log('perusahaan :', value[i][2])
        console.log('')
    }
}

var nestedArray = [
    [1, "marc zukerberc", "facebook"],
    [2, "jackma", "alibaba"],
    [3, "steve jobs", "apple"],
    [4, "elon musk", "tesla & space X"]
]
panngilNestedArray(nestedArray)