import React from 'react';
import './App.css';

function App() {
 // input is an array
  let findDuplicates = function(input) {
// first, make a copy so we don't mutate original
  let sortedArray = input.slice()
 // sort input array in
  sortedArray.sort(function(a, b) {
    return a - b;
  });
 //verify sorting worked
  console.log('original array: ', input);
  console.log('sorted array: ', sortedArray);

  //step through array: at each index, check next index to see if the values match.
  // If they do, return with the current index's value.
  //If they don't, go forward one index and try again

  //I made a for loop last time so let's stick with that
  for (var i =1; i < sortedArray.length; i++) {
  //check current index against previous index. If they match, return the matching index
    if(sortedArray[i-1] === sortedArray[i]) {
      return sortedArray[i]
    } else {
    return "no match"
    }
  }
}


  return (
    <div className="App">
      <h1>Array Duplicate Finder</h1>
      <p>Given an array of positive integers, such as [1, 2, 1, 3] find if the array has a duplicate value or not.</p>
      <div className="find-output">
        <span>For array [1,2,1,3], matching value: {findDuplicates([1,2,1,3])}</span>
      </div>
      <div className="find-output">
        <span>For array [1,2,3,0], matching value: {findDuplicates([1,2,3,0])}</span>
      </div>
    </div>
  );
}




export default App;
