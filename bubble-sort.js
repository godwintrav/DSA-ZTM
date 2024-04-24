
//My solution;
function bubbleSort(arr){
    let isSorted = false;
    let counter = 0;
    let checker = 0;
    while(isSorted != true) {
        

        if(arr[counter + 1] < arr[counter]){

            let temp = arr[counter + 1];
            arr[counter + 1] = arr[counter];
            arr[counter] = temp;
            
        }else{
            checker++;
            if(checker == arr.length-1){
                isSorted = true;
                break;
            }
        }

        counter++;
        
        if(counter == arr.length-1){
            counter = 0;
            checker = 0;
        }
    }

    console.log(arr);
}

//He's solution
// function bubbleSort(array) {
//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length; j++) { 
//         if(array[j] > array[j+1]) {
//           //Swap the numbers
//           let temp = array[j]
//           array[j] = array[j+1];
//           array[j+1] = temp;
//         }
//       }        
//     }
//   }
  
//   bubbleSort(numbers);

//bubbleSort([2, 1, 5 , 3 , 10, 9, 24, 50, 46, 11, 16, 21, 0])

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        // Set current index as minimum
        let min = i;
        let temp = array[i];

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                // Update minimum if current is lower that what we had previously
                min = j;
            }
        }

        array[i] = array[min];
        array[min] = temp;
    }

    return array;
}

console.log(selectionSort(numbers));
