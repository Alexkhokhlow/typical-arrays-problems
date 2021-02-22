exports.min = function min(array) {
    if (typeof(array) == 'undefined' || array.length == 0) {
        return 0
    }
    let minNumber = array[0]
    array.forEach(element => {
        if (minNumber > element) {
            minNumber = element
        }
    });
    return minNumber
}

exports.max = function max(array) {
    if (typeof(array) == 'undefined' || array.length == 0) {
        return 0
    }
    let maxNumber = array[0]
    array.forEach(element => {
        if (maxNumber < element) {
            maxNumber = element
        }
    });
    return maxNumber

}

exports.avg = function avg(array) {
    if (typeof(array) == 'undefined' || array.length == 0) {
        return 0
    }
    let sum = 0
    array.forEach(element => {
        sum = sum + element
    })

    return sum / array.length

}