const palindrome = (value) => {
  const reverse = value.split("").reverse().join("");
  return reverse === value;
};

console.log(palindrome("radar"));
