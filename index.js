let array = [11, 2, 3, 18, 15, 8, 4, 5, 8, 1, 24, -1];
const arraySize = array.length;
let heapSize = array.length;

function siftDown(i, subArraySize){
    let leftI = i * 2 + 1;
    let rightI = i * 2 + 2;
    if (rightI < subArraySize && (array[i] < array[leftI] || array[i] < array[rightI])){
        let tempMax = Math.max(array[leftI], array[rightI]);
        if (tempMax === array[leftI]){
            [array[i], array[leftI]] = [array[leftI], array[i]];
            siftDown(leftI, subArraySize);
        }
        else{
            [array[i], array[rightI]] = [array[rightI], array[i]];
            siftDown(rightI, subArraySize);
        }
    }
    if (leftI < subArraySize){
        if (array[i] < array[leftI]){
            [array[i], array[leftI]] = [array[leftI], array[i]];
            siftDown(leftI, subArraySize);
        }
    }
}

function createHeap(i) {
    let leftI = i * 2 + 1;
    let rightI = i * 2 + 2;
    if (leftI < arraySize){
        createHeap(leftI);
    }
    if (rightI < arraySize){
        createHeap(rightI);
    }
    siftDown(i, arraySize);
}

createHeap(0);

for (var i = 0; i < arraySize; i++){
    [array[0], array[heapSize-1]] = [array[heapSize-1], array[0]];
    heapSize--;
    siftDown(0, heapSize);
}

console.log(array.join(" "));