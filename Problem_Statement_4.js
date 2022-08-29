// PROBLEM Statement 4

let arr = [45, 4, 3, 7, 7, 45];
let n = arr.length;


let i;
let j;
function firstNonRepeatingNumber(arr, n) {
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++)
            if (i != j && arr[i] == arr[j])
                break;
        if (j == n)
            return arr[i];
    }
    return -1;
}

firstNonRepeatingNumber(arr, n);