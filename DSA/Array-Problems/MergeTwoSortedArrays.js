// GIVEN 2 SORTED ARRAYS - MERGE THEM SUCH THAT THE RESULTANT ARRAY IS ALSO SORTED

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 4, 6, 8, 9];
let arr1Length = arr1.length;
let arr2Length = arr2.length;

// TOTAL 3 WHILE LOOPS
// 1ST - COMPARE BOTH ARRAYS WITH MINIMUM ARRAY ELEMENTS AND PUSH ACCORDINGLY
// 2ND - PUSH REST OF THE ELEMENTS OF 1ST ARRAY IF ANY LEFT - WONT GO IN IF NONE LEFT
// 3RD - PUSH REST OF THE ELEMENTS OF 2ND ARRAY IF ANY LEFT - WONT GO IN IF NONE LEFT

// TIME COMPLEXITY - O(min(n, m))
// SPACE COMPLEXITY -  O(n + m)

function mergeSortedArrays() {
  let result = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  while (arr1Pointer < arr1Length - 1 && arr2Pointer < arr2Length - 1) {
    if (arr1[arr1Pointer] > arr2[arr2Pointer]) {
      result.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else {
      result.push(arr1[arr1Pointer]);
      arr1Pointer++;
    }
  }
  while (arr1Pointer < arr1Length - 1) {
    result.push(arr1[arr1Pointer]);
    arr1Pointer++;
  }
  while (arr2Pointer < arr2Length - 1) {
    result.push(arr2[arr2Pointer]);
    arr2Pointer++;
  }
  return result;
}
console.log(mergeSortedArrays());
