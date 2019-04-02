console.log("=====ini latihan paramater-filter====")
function latihanParameter(value) {
    var array = [{negara: "indonesia", benua : "asia"},
                 {negara: "malaysia", benua : "asia"},
                 {negara: "texas", benua : "amerika"},
                 {negara: "jepang", benua : "asia"}
    ]
    var newArray = array.filter(function(item){
      return item.benua === "asia"
    })
    console.log(newArray)
}
latihanParameter()