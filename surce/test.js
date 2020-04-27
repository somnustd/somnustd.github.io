//归并排序
function merge(left, right) {
    var result = [];
    console.log(left, right)
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift()); //shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left).concat(right)
}

function mergeSort(arr) {
    if (arr.length 