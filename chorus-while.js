const chorus = "Let's dance";
repeat = 0;
while (repeat < 10) {       // repeat chorus line using for loop 
  if (repeat === 5) {     // change keys when condition apply
    console.log("change keys");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun come up!");