/*
iterate over s1, from 1 length to full length and compare with s2,
if present, insert it into an array,
at the end, check the longest from array
*/
function Model() {
  this.longestObj = {};
}
function longest(s1, s2) {
  let idx1 = 0;
  let s1Length = 1;
  let s1Arr = [...s1];
  (function iterate() {
    if (idx1 + s1Length > s1.length) {
      if (s1Length < s1.length) {
        idx1 = 0;
        s1Length++;
        iterate();
      }
    } else {
      checkS2(s1Arr.slice(idx1, idx1 + s1Length), s2);
      if (idx1 <= (s1Arr.length - s1Length)) {
        idx1++;
        iterate();
      }
    }
  })();
  return Object.values(model.longestObj).sort((a, b) => {
    return a.length - b.length;
  }).pop();
}
function checkS2(arr, s2) {
  let lastIdx = 0
  let flag = true;
  arr.forEach(char => {
    let idx = s2.indexOf(char, lastIdx);
    if (flag && idx >= lastIdx) {
      lastIdx = idx + 1;
    } else flag = false;
  });
  if (flag) model.longestObj[arr.length] = arr.join('');
}

let model = new Model();
console.log('Result:', longest('IGGTIB', 'GXTXIYB')); //GTIB
model = new Model();
console.log('Result:', longest('EBEZDC', 'BECBED')); //EBE
model = new Model();
console.log('Result:', longest('hhhh', 'hh')); //hh
