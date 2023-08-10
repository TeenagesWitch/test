const arr = [2, 3, 4, 10, 40];
const x = 10;

// Time Complexity: O(log n)
function BinarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);

        if (arr[mid] === x) {
            return mid;
        }

        if (arr[mid] > x) {
            return BinarySearch(arr, l, mid - 1, x);
        }

        return BinarySearch(arr, mid + 1, r, x);
    }

    return -1;
}

console.log(BinarySearch(arr, 0, arr.length - 1, x));

// Time Complexity: O(n)
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch(arr, x));

// Time Complexity: O(log n)
function ternarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid1 = l + Math.floor((r - l) / 3);
        let mid2 = r - Math.floor((r - l) / 3);

        if (arr[mid1] === x) {
            return mid1;
        }

        if (arr[mid2] === x) {
            return mid2;
        }

        if (arr[mid1] > x) {
            return ternarySearch(arr, l, mid1 - 1, x);
        }

        if (arr[mid2] < x) {
            return ternarySearch(arr, mid2 + 1, r, x);
        }

        return ternarySearch(arr, mid1 + 1, mid2 - 1, x);
    }

    return -1;
}

console.log(ternarySearch(arr, 0, arr.length - 1, x));