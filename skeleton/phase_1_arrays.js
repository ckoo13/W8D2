Array.prototype.uniq = function() {
    //array = [1,1,1,2,3,4]
    let answer = [];

    for (let i = 0; i < this.length; i++) {
        if (!answer.includes(this[i])) {
            answer.push(this[i]);
        }
    }

    return answer;
}

// console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
    let sorted = this.sort();
    let answer = [];
    let right = this.length - 1;
    let left = 0;

    while (left < right) {
        if (sorted[left] + sorted[right] === 0) {
            answer.push(left);
            answer.push(right);
            return answer;
        }

        else if (sorted[left] + sorted[right] < 0) {
            left += 1;
        }

        else if (sorted[left] + sorted[right] > 0) {
            right -= 1;
        }
    }
}

// console.log([-2,1,4,5,6,7,2,4,3].twoSum());

Array.prototype.transpose = function() {
    let answer = [];

    for (let x = 0; x < this[0].length; x++) {
        answer.push([]);
    }

    let i = 0;

    while (i < this[0].length) {
        for (let j = 0; j < this.length; j++) {
            answer[i].push(this[j][i]);
        }

        i += 1;
    }

    return answer;
}




