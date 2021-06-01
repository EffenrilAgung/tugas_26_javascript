var arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
function panggilData() {
    arr.forEach(function (index) {
        if (isFinite(arr) === false) {
            console.log(`Angka ${index} NOT Infinity.`)
        } else {
            console.log(`Angka Infinity`)
        }
    })
}
panggilData()
