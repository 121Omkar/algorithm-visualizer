export function insertionsort(array) {
	const animations = [];
	if (array.length <= 1) {
		return array;
    }
	insertionHelper(array,animations);
    return animations;
}
// To Visualize better changed a bit
function insertionHelper(array,animations) {
    for(var i = 1; i < array.length; i++) {
        let min = i;
        for(var j = i - 1; j >= 0; j--) {
            animations.push([min, j, true])
            animations.push([min, j, true])
            if(array[j] > array[min]) {
                animations.push([j, array[min], false])
                animations.push([min, array[j], false])
                let temp = array[j]
                array[j] = array[min]
                array[min] = temp
                min = j;
            }
            else {
                break;
            }
        }
    }
	return animations;
}

