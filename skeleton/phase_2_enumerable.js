Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++){ 
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {

    let answer = [];

    function mapping() {
        answer.push(this.myEach(callback))
    }

    return answer;
}

Array.prototype.myReduce = function(callback, initialValue) {
    if (initialValue === undefined) {
        initialValue = 0;
    }

    let res = initialValue;
    

    this.myEach(element => {
        res = callback(res, element); 
        // function(acc, el) { return acc + el}
        }
    );

    return res;
}

