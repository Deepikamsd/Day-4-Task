
/*QN:1
    Do the below programs in anonymous function & IIFE

    a)Print odd numbers in an array*/

/*using anonymous function*/
var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*using IIFE function*/

var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*b)Convert all the strings to title caps in a string array*/

/*using anonymous function*/

var titlecase = function (arr) {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  return data.join(" ");
};
console.log(titlecase(["tHis iS jAVAscript"]));

/*using IIFE function*/

(function (arr) {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  console.log(data.join(" "));
})(["tHis iS jAVAscript"]);

/*c)Sum of all numbers in an array*/

/*using anonymous function*/

var arr = [1, 2, 3, 4, 5];
var sum = function(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sum(arr));

/*using IIFE function*/

var arr = [1, 2, 3, 4, 5];
(function(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
})(arr);


/*d)Return all the prime numbers in an array*/

/*using anonymous function*/

const prime = function(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
        break;
      }
    }
    if (count === 0 && arr[i] > 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  

/*using IIFE function*/

(function(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
        break;
      }
    }
    if (count === 0 && arr[i] > 1) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*e)Return all the palindromes in an array*/
/*using anonymous function*/

var palindrome = function(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        var data = arr[i].split("").reverse().join("");
        if(data === arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(palindrome(["dad", "mom", "data"])); 

/*using IIFE function*/

(function(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        var data = arr[i].split("").reverse().join("");
        if(data === arr[i]) {
            result.push(arr[i]);
        }
    }
    console.log(result);
})(["dad", "mom", "data"]);

/*f)Return median of two sorted arrays of the same size.*/
/*using anonymous function*/
var median = function(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    arr.sort((a, b) => a - b);
    let n = arr.length;
    if (n % 2 === 0) {
      return ((arr[n / 2] + arr[n / 2 - 1]) / 2);
    } else {
      return arr[Math.floor(n / 2)];
    }
  }
  
  let arr1 = [1, 3, 5, 7];
  let arr2 = [2, 4, 6, 8, 9];
  console.log(median(arr1, arr2));

/*using IIFE function*/

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 9];
(function(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  arr.sort((a, b) => a - b);
  let n = arr.length;
  if (n % 2 === 0) {
    console.log((arr[n / 2] + arr[n / 2 - 1]) / 2);
  } else {
    console.log(arr[Math.floor(n / 2)]);
  }
})(arr1, arr2);

/*g)Remove duplicates from an array*/
/*using anonymous function*/

var Duplicates = function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

var a = [1, 2, 3, 4, 2, 5, 6, 3, 7];
console.log(Duplicates(a));

/*using IIFE function*/

var array = [1, 2, 3, 4, 2, 5, 6, 3, 7];
(function(arr) {
  var uniqueArray = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  console.log(uniqueArray);
})(array);

/*Rotate an array by k  times*/

/*using anonymous function*/

const Rotate = function(arr, K) {
    for (var i = 0; i < K; i++) {
      arr.push(arr[i]);
    }
    for (var i = 0; i < K; i++) {
      arr.shift();
    }
    return arr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const K = 3;
  console.log(Rotate(arr, K));

  /*using IIFE function*/

  const arr = [1, 2, 3, 4, 5];
  const K = 3;
  (function(arr, K) {
    for (var i = 0; i < K; i++) {
      arr.push(arr[i]);
    }
    for (var i = 0; i < K; i++) {
      arr.shift();
    }
    console.log(arr);
  })(arr, K); 




  /*QN NO:2
  Do the below programs in arrow functions.
a)Print odd numbers in an array*/
const result = [];
const a = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*b)Convert all the strings to title caps in a string array*/

const titlecase = (arr) => {
  let res = arr.toString();
  let data = res.toLowerCase().split(" ");
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  return data.join(" ");
};

console.log(titlecase(["tHis iS jAVAscript"]));

/*c)Sum of all numbers in an array*/

const sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  
  const arr = [1, 2, 3, 4, 5];
  console.log(sum(arr));


/*d)Return all the prime numbers in an array*/

const prime = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
        break;
      }
    }
    if (count === 0 && arr[i] > 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*e)Return all the palindromes in an array*/

const palindrome = (arr) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
      const data = arr[i].split("").reverse().join("");
      if(data === arr[i]) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  console.log(palindrome(["dad", "mom", "data"]));













  












