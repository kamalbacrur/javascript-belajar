function latihanNestedArray(value) {
    for(var i = 0;i < value.length; i++){
        console.log(value [i][0])
        console.log(value [i][1])
        console.log(value [i][2])
        console.log("")
    }
}
var nestedArray = [
    [1,2,3,4],
    ["marc zuckerberc", "jack ma", "steve jobs"],
    ["facebook", "alibaba", "apple"]
]
latihanNestedArray(nestedArray)