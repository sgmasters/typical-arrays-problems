
exports.min = function min (array) {
    return common(array, (item, index) => {
        if (index == 0) {
            this.result = item;
        }
        if (item < this.result) {
            this.result = item;
        }
    });
}

exports.max = function max (array) {
    return common(array, (item, index) => {
        if (index == 0) {
            this.result = item;
        }
        if (item > this.result) {
            this.result = item;
        }
    });
}

exports.avg = function avg (array) {
    return common(array, (item, index) => {
        if (index == 0) {
            this.sum = 0;
        }
        this.sum += item;
        if (index == array.length - 1) {
            this.result = sum / array.length;
        }
    });
}

function common(array, consumer) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    array.forEach((item, index) => consumer(item, index));
    return result;
}
