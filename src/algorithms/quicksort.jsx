export function quicksort(array) {
    var left = 0;
    var right = array.length - 1;
    if(left === right) {
        return array;
    }
    const animations = []
    quickSortHelper(array, left, right, animations)
    return animations
}

function quickSortHelper(array, left, right, animations) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortHelper(array, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortHelper(array, index, right, animations);
        }
    }
    return array;
}
function swap(array, leftIndex, rightIndex){
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}
function partition(array, left, right, animations) {
    var pivot   = array[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        animations.push([i, pivot, true])
        animations.push([i, pivot, true])
        while (array[i] < pivot) {
            i++;
        }
        animations.push([j, pivot, true])
        animations.push([j, pivot, true])
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            animations.push([i, array[j], false])
            animations.push([j, array[i], false])
            swap(array, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
