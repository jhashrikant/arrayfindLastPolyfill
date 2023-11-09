//polyfill for array.findLast() method
Array.prototype.myfindLast = function (callbackfn){
  for (let i = nums.length -1; i >= 0; i--) {
    const Currentelement = this[i];
    const res = callbackfn(Currentelement ,i ,this);
    if (res) return Currentelement; 
  }
  return undefined;
}

const nums = [5, 12, 50, 130, 44];

function callbackfn(currentElement, index ,array){
  return currentElement > 45
}
const result = nums.myfindLast(callbackfn);
console.log('line17',result);

