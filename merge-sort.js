
function mergeSort(array){
    if(array.length == 1){
        return array;
    }

    let midIndex = 0;

    if(array.length % 2 == 0){
        midIndex = array.length / 2;
    }else {
        midIndex = (array.length - 1) / 2;
    }
    
    const left = array.slice(0, midIndex);
    const right = array.slice(midIndex);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    const resultArr = [];
    if(!left){
        return right;
    } 

    if(!right){
        return left;
    }

    let leftIterator = 0;
    let rightIterator = 0;
    
    while(leftIterator < left.length && rightIterator < right.length){
        if(left[leftIterator] < right[rightIterator]){
            resultArr.push(left[leftIterator]);
            leftIterator++
        } else {
            resultArr.push(right[rightIterator]);
            rightIterator++;
        }
    }

    return resultArr.concat(left.slice(leftIterator)).concat(right.slice(rightIterator));

}

console.log(mergeSort([1, 3, 5, 6, 2, 4, 7, 8, 45, 36, 12, 13, 14, 29, 54, 38, 90]));