export const sortNumbers = (arr) => {
    if (
        !Array.isArray(arr) ||
        !isEveryANumber(arr)
    ) return null;

    while (!checkOrder(arr)) {
        switchPairsOnce(arr);
    }
    return arr;
};

const switchPairsOnce = (arr) => {
    let index = 0;
    while (index < arr.length - 1){
        if (arr[index] > arr[index + 1]) switchItems(arr, index, index + 1);
        index++
    }
}
const checkOrder = (arr) => arr.every((item, index) => {
    if (index === arr.length-1) return true;
    return item < arr[index + 1];
})

const switchItems = (arr, indexA, indexB) => {
    const bufor = arr[indexB];
    arr[indexB] = arr[indexA];
    arr[indexA] = bufor;
}

const isEveryANumber = (arr) => arr.every(item => typeof item === 'number');
