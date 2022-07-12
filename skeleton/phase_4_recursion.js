function range(start, end) { 
    //Base Case
    if (start === end) {
        return end;
    }

    else {
        return [start].concat(range(start + 1, end));
    }
}

function sumRec(arr) {
    if (arr.length == 1) {
        return arr[0];
    }

    else {
        return arr.pop() + sumRec(arr.slice(0,arr.length))
    }
}

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }

    else {
        return base * exponent(base, exp - 1);
    }
}

function bsearch(arr, target) {
    if (arr.length === 1 && arr[0] != target) {
        return -1;
    }

    let middle = Math.trunc(arr.length / 2);

    if (arr[middle] === target) {
        return middle;
    }
    else if (arr[middle] > target) {
        bsearch(arr.slice(0, middle), target);
    }

    else if (arr[middle] < target) {
        let alt = bsearch(arr.slice(middle + 1, arr.length), target);
        if (alt < 0) {
            return alt;
        }
        else {
            return 1 + alt + middle;
        }
    }
}
