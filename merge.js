function merge(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;

    // Merge the two arrays by comparing their elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    // Add the remaining elements from arr1
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    // Add the remaining elements from arr2
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort the two halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort};