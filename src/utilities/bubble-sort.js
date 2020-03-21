function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

const  bubblesort = (arr) => {
    console.log(arr);
    const steps = [];

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                steps.push({oper: 'swap', values: [j, j+1]})
            }
        }
    }
    console.log(steps);
    return steps;
}

export default bubblesort;