// Add your functions here
function map(array,fn) {
  let newArray=[];
  array.forEach((item) => {
    newArray.push(fn(item));
  });
return newArray;
};


function reduce(array,fn,start) {
  let s = (!!start)? start:array[0];
  let i = (!!start)? 0:1;
  for ( ;i < array.length; i++) {
    s = fn(array[i],s)
  };
  return s;
};
