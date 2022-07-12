function bubbleSort(array) {

    let sorted = false;

    while (!sorted) {
        sorted = true;
        
        for (let i = 0; i < array.length; i++) {
                let current = array[i];
                let next = array[i + 1];
                let previous = array[i];
                
            if (array[i] > array[i + 1]) {
                array[i] = next;
                array[i + 1] = previous;
                sorted = false;
            }
        }
    }

    return array;
}

function substrings(string) {
    let answer = [];

    for (let i = 0; i < string.length; i++) {
        answer.push(string[i])
        for (let j = i + 1; j < string.length; j++) {
            answer.push(string.slice(i, j + 1));
        }
    }

    return answer;
}