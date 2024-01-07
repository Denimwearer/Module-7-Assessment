const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

const arr = {
  tinyArray: getSizedArray(10),
  smallArray: getSizedArray(100),
  mediumArray: getSizedArray(1000),
  largeArray: getSizedArray(10000),
  extraLargeArray: getSizedArray(100000),
};

// How long does it take to double every number in a given
// array?

Object.keys(arr).forEach((size) => {
  const array = arr[size];
  // Try it with first function
  perf.start(); // Starts timer
  doublerAppend(array);
  let resultsAppend = perf.stop(); // Stops timer and save time results

  // Try it with second function
  perf.start();
  doublerInsert(array);
  let resultsInsert = perf.stop();

  console.log(`Results for ${size}`);
  console.log("insert", resultsInsert.preciseWords);
  console.log("append", resultsAppend.preciseWords);
});

//As the size of the array increases, the execution time of both function also increases. The doublerInsert tends to have longer execution times compared to doublerAppend as the array size grows. The reason for the slower perfomance of doublerAppend is due to the unshift method. The doubleAppend function scales better than doublerInsert as the size increases, this is due to the more efficient time complexity of the push method compared to the unshift method.
