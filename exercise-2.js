// Exercise 2

const concatenateStrings = (array) => {

  const filteredStrings = array.filter(string => string.startsWith("a") || string.startsWith("A"));
  let concatenatedStrings = "";
  
  for (let i = 0; i < filteredStrings.length; i++) {
    const string = filteredStrings[i];
    concatenatedStrings += string;
  }

  if (concatenatedStrings.length > 10) {
    concatenatedStrings = concatenatedStrings.substring(0, 10);
    return concatenatedStrings;
  } else {
    return concatenatedStrings;
  }
};
