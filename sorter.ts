function sortNumbersList(numbers: Array<number>, index1: number = 0, index2: number = 1): Array<number> {
    const listLength = numbers.length;
    if (index1 >= listLength) { return numbers }
    if (index2 >= listLength) { return sortNumbersList(numbers, index1 + 1, index1 + 2) }

    const pivot1 = numbers[index1];
    const pivot2 = numbers[index2];

    if (pivot1 < pivot2) {
        numbers[index1] = pivot2
        numbers[index2] = pivot1
    }

    return sortNumbersList(numbers, index1, index2+1);
}

const exampleList1 = [5, 7, 1, 3, 8, 2];
const exampleList2 = [0, 1, 1, 6, 2, 0];
const exampleList3 = [7, 1, 4, 9, 2, 9];

console.log(sortNumbersList(exampleList1))
console.log(sortNumbersList(exampleList2))
console.log(sortNumbersList(exampleList3))