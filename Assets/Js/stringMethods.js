//JavaScript String Method

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

let stgs = () => {
  //string methods
  let val = " sample string ";

  //length of the value
  let len = val.length;
  console.log(len);

  // trim() method
  let trim_val = val.trim();
  console.log(trim_val);
  console.log(trim_val.length);

  // trimStart // trimEnd()
  //slice  or tear
  let sliced = trim_val.slice(-3);
  console.log(sliced);

  // split
  let split = trim_val.split(" ");
  console.log(split.join());

  //replace
  let replaced = trim_val.replace(" ", "");
  console.log(replaced);

  //concat
  let newText = trim_val.concat(" ", "sample text");
  console.log(newText);
  // indexOf // match
};
stgs();
