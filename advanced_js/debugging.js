const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, array) => {
        // console.log('array', array)
        // console.log('acc', acc)
        debugger // chrome 에서 실행하기
        return acc.concat(array) 
}, []) // acc의 default가 [], arrat는 iterating 할때 하나의 원소

flattened // [0, 1, 2, 3, 4, 5]