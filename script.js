/*

//!task 1: a Print odd numbers in an array

// Anonymous function

 var arr = [1,2,3,4,5,6,7,8,9,10];
 var result = [];
 var odd = function (){
      for(var x = 0; x<arr.length;x++){
        if(arr[x]%2 != 0){
           result.push(arr[x]);

        }
      }
      console.log(result);
 }
 odd(arr);


//  IIFE function
var result2 = [];
(function(arr){
    for(var x = 0; x<arr.length;x++){
        if(arr[x]%2 != 0){
           result2.push(arr[x]);

        }
      }console.log(result2);
}

)([1,2,3,4,5,6,7,8,9,10])


// Arrow function

var result3 =[];
var odd3 = (arr)=>{
    for(var x = 0; x<arr.length;x++){
        if(arr[x]%2 != 0){
           result3.push(arr[x]);

        }
      }
      return result3;
}
console.log(odd3([1,2,3,4,5,6,7,8,9,10]));

*/

/*

//!Task 1 b: Convert all the strings to title caps in a string array

// Anonymous function

var stringArr = ["virat is a batsman", "Mahendra Singh dhoni was our captain", "rohit sharma was a good captain", "ashwin ravichandran makes a record in test"];
var toTitleCase = function (arr){
    
    for(var x=0; x<arr.length; x++){
        arr[x] = arr[x].toLowerCase().split(" ");
        for(var i = 0; i<arr[x].length;i++){
          arr[x][i] = arr[x][i].charAt(0).toUpperCase() + arr[x][i].slice(1);
        }
        arr[x]=arr[x].join(" ");
        
        
    }return stringArr;
}

console.log(toTitleCase(stringArr));
//IIFE function
//type 2 just capitalise the first letter(For Names)

(function (arr){
  for(var x=0; x<arr.length; x++){
      var n = arr[x].split("");
      var o = (n[0]).toUpperCase();
      n.splice(0,1,o);
      let m = n.join("");
      arr.splice(x,1,m);
      
  }console.log(arr);
})(["virat", "dhoni", "rohit", "ashwin"]);

// Arrow function

var toTitleCase1 = (arr)=>{
  for(var x=0; x<arr.length; x++){
    var n = arr[x].split("");
    var o = (n[0]).toUpperCase();
    n.splice(0,1,o);
    let m = n.join("");
    arr.splice(x,1,m);
    
}console.log(arr);
}
toTitleCase1(["virat", "dhoni", "rohit", "ashwin"]);

*/

/*
//!Task 1 c: Sum of all numbers in an array

//Anonymous function

var array = [1,2,3,4,5,6,7,8,9,156];
var sum = 0;
var sumOf = function(arr){
  for(var x = 0; x<arr.length;x++){
      sum += arr[x];
  }
  console.log(sum);
}
sumOf(array);


//IIFE
var sum2=0;
(function(arr){
  for(var x = 0; x<arr.length;x++){
      sum2 += arr[x];
  }
  console.log(sum2);
})([1,2,3,4,5,6,7,8,9,156]);

//Arrow

var sum3 = 0;
var sumOf2 = (arr)=>{
  for(var x = 0; x<arr.length;x++){
    sum3 += arr[x];
}
return sum3;
}
console.log(sumOf2([1,2,3,4,5,6,7,8,9,156]));

*/

/*

//! Task 1 d :Return all the prime numbers in an array

//Anonymous Function
var array = [1,2,3,4,5,6,7,8,9,10,11,12];
var primeArr = [];
var prime = function(arr){
  for(var i = 0;i<arr.length;i++){
    if(arr[i] !==1 ? arr[i]!=2 && arr[i]!=3 && arr[i]!= 5 : null){
        if(arr[i]%2!==0 && arr[i]%3!==0 && arr[i]%5!==0){
          primeArr.push(arr[i]);
        }
        
    }
    else{
      arr[i]!==1 ? primeArr.push(arr[i]) : null;
      }
    
}return primeArr
}
console.log(prime(array));

//IIFE
var primeArr2 = [];
(function(arr){
  for(var i = 0;i<arr.length;i++){
    if(arr[i] !==1 ? arr[i]!=2 && arr[i]!=3 && arr[i]!= 5 : null){
        if(arr[i]%2!==0 && arr[i]%3!==0 && arr[i]%5!==0){
          primeArr2.push(arr[i]);
        }
        
    }
    else{
      arr[i]!==1 ? primeArr2.push(arr[i]) : null;
      }
    
}console.log(primeArr2);
})([1,2,3,4,5,6,7,8,9,10,11,12]);



//Arrow function
var primeArr3 =[];
var prime2 = (arr)=>{
  for(var i = 0;i<arr.length;i++){
    if(arr[i] !==1 ? arr[i]!=2 && arr[i]!=3 && arr[i]!= 5 : null){
        if(arr[i]%2!==0 && arr[i]%3!==0 && arr[i]%5!==0){
          primeArr3.push(arr[i]);
        }
        
    }
    else{
      arr[i]!==1 ? primeArr3.push(arr[i]) : null;
      }
    
}console.log(primeArr3);
}

prime2(array);

*/


/*

//!task1 E :Return all the palindromes in an array

//Anonymous function

var array = [11,21,33,44,17,151,123,101];
var palresult = [];
var palindrome = function(arr){
     for(let x = 0;x<arr.length;x++){
      var reverse = arr[x].toString().split("").reverse().join("");
      var forward = arr[x].toString();
      if(reverse === forward){
          palresult.push(arr[x]);
      }
     }return palresult
}
console.log(palindrome(array));


//IIFE
var palresult2 = [];
(function(arr){
  for(let x = 0;x<arr.length;x++){
   var reverse = arr[x].toString().split("").reverse().join("");
   var forward = arr[x].toString();
   if(reverse === forward){
       palresult2.push(arr[x]);
   }
  }console.log(palresult2)
})(array)


// Arrow function
var palresult3 = [];
var palindrome2 = (arr)=>{
  for(let x = 0;x<arr.length;x++){
    var reverse = arr[x].toString().split("").reverse().join("");
    var forward = arr[x].toString();
    if(reverse === forward){
        palresult3.push(arr[x]);
    }
   }return palresult3
}

console.log(palindrome2(array));

*/
/*
//!Task 4: f: Return median of two sorted arrays of the same size

//!Anonymous function
var array1 = [1,4,3,5,7,2];
var array2 = [2,3,6,5,3,2];
var median = function(arr1, arr2){
      var mergedArr = arr1.concat(arr2);
      var median = mergedArr.length/2;
      if (mergedArr.length%2===0){
        var medianResult = (mergedArr[median-1] + mergedArr[median])/2;
      }
      else{
        var medianResult = mergedArr[Math.ceil(mergedArr.length)];
      }
      console.log(medianResult);
}

median(array1, array2);

//IIFE

(function(arr1, arr2){
  var mergedArr = arr1.concat(arr2);
  var median = mergedArr.length/2;
  if (mergedArr.length%2===0){
    var medianResult = (mergedArr[median-1] + mergedArr[median])/2;
  }
  else{
    var medianResult = mergedArr[Math.ceil(mergedArr.length)];
  }
  console.log(medianResult);
})(array1, array2)

*/
/*
//! task 4 g: Remove duplicates from an array

var array = [1,1,2,6,5,3,7,1,1,4,4,8,4,9,'str','red','str'];
var arrayResult = [];

var removeDup = function(arr){
  for(var i=0;i<arr.length;i++){
    if(arrayResult.indexOf(arr[i])=== -1){
      arrayResult.push(arr[i]);
    }
    
  }console.log(arrayResult);
}
removeDup(array);


//IIFE
var arrayResult1 = [];
(function(arr){
  for(var i=0;i<arr.length;i++){
    if(arrayResult1.indexOf(arr[i])=== -1){
      arrayResult1.push(arr[i]);
    }
    
  }console.log(arrayResult1);
})(array)

*/

//!Task 4 : h: Rotate an array by k times

var array = ['a','b','c','d'];

var rotate = function(arr,k){
  for(var i =0; i<=k;i++){
   var a = arr.shift();
   arr.push(a);
  }return array
}
console.log(rotate(array, 5))


//!IIFE
var array1 = ['a','b','c','d'];

(function(arr,k){
  for(var i =0; i<=k;i++){
   var a = arr.shift();
   arr.push(a);
  }console.log(array1);
})(array1, 5);