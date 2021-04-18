export function bubblesort(array) {
	const animations = [];
	if (array.length <= 1) {
		return array;
    }
	bubbleHelper(array,animations);
    return animations;
}
function bubbleHelper(array,animations) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            animations.push([j, j+1, true])
            animations.push([j, j+1, true])
            if (array[j] > array[j + 1]) {
                animations.push([j, array[j+1], false])
                animations.push([j+1, array[j], false])
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
	return animations;
}
