"use script";

function findHashtags(file, number) {
  let hashtags = file.substring(file.indexOf("#"), file.lastIndexOf("#") + 1);
  let numberToString = number.toString();

  if (numberToString.length < 2) {
    numberToString = numberToString.padStart(2, "0");
  }
  newFile = file.replace(hashtags, numberToString);
  return newFile;
}
console.log(findHashtags("image###.png", 123));
