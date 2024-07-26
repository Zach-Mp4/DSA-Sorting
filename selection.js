function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        // Assume the minimum is the first element
        let minIndex = i;

        // Check the rest of the array for a smaller element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If the minimum is not the position i, swap it
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

module.exports = selectionSort;
