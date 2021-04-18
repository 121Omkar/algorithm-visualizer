export function selectionsort(array) {
	const animations = [];
	if (array.length <= 1) {
		return array;
    }
	selectionHelper(array,animations);
    return animations;
}
function selectionHelper(array,animations) {
    for(var i = 0; i < array.length; i++) {
        let min = i;
        for(var j = i; j < array.length; j++) {
            animations.push([min, j, true])
            animations.push([min, j, true])
            if(array[j] < array[min]) {
                min = j
            }
        }
        animations.push([i, array[min], false])
        animations.push([min, array[i], false])
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
    }
	return animations;
}
