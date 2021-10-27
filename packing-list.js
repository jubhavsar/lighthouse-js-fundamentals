const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
// iterate an packingList array using for loop.
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
// iterate an packingList array using while loop.
let i = 0;
console.log("Kitchen stuff to pack:");
while(i < packingList.length){
  console.log(packingList[i]);
  i++;
}