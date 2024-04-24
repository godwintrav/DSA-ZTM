class LongestPalindrome {

    constructor() {
        this.palindrome = '';
    }

 

getLongestPalindrome(array) {

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
    // console.log(left);
    // console.log(right);
    return this.checkPalindrome(this.getLongestPalindrome(left), this.getLongestPalindrome(right));

}

checkPalindrome(left, right){

    let concatArray = []
    if(left.length == 1){
        concatArray = [...left, right];
    } else if(right.length == 1) {
        concatArray = [left, ...right];
    } else{
        concatArray = [...left, ...right];
    }
    if(this.compareString(concatArray)){
        if(this.palindrome.length < concatArray.length){
            this.palindrome = concatArray.join('');
        }
    }
    return concatArray;
}

compareString(str){
    if(str.length % 2 == 0){
        return this.compareStringEven(str);
    }else {
        return this.compareStringOdd(str);
    }

}

compareStringOdd(str){
    const numForComparison = (str.length - 1) / 2;
    let result = true;

    for(let i = 0; i < numForComparison; i++){
        if(str[i] != str[(str.length - 1) - i]){
            result = false;
        }
    }

    return result;
}

compareStringEven(str){
    const numForComparison = (str.length - 2) / 2;
    let result = true;
    if(str[numForComparison] != str[numForComparison+1]){
        result = false;
        return result;
    }

    for(let i = 0; i < numForComparison; i++){
        if(str[i] != str[(str.length - 1) - i]){
            result = false;
        }
    }

    return result;
}
}

const longestPalindromeClass = new LongestPalindrome();
longestPalindromeClass.getLongestPalindrome("aba");
console.log(longestPalindromeClass.palindrome);