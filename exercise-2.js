// Exercise 2

const concatenateStrings = (array) => {

  const filteredStrings = array.filter(string => string.startsWith("a") || string.startsWith("A"));
  let concatString = "";
  
  for (let i = 0; i < filteredStrings.length; i++) {
    const string = filteredStrings[i];
    concatString += string;
  }
  if (concatString.length > 10) {
    concatString = concatString.substring(0, 10);
    return concatString;
  } else {
    return concatString;
  }
};

/*
  Ho preferito usare filter per eliminare fin da subito le stringhe che non
  iniziano con la letter 'a'/'A', per poi fare il ciclo sull'array gia filtrato.
  
  Si poteva però fare anche tutto nel ciclo: 
  - controllavo se la stringa iniziava con la lettera 'a', 
    se era cosi, finivo il ciclo, altrimenti con un 'continue' potevo saltare 
    il ciclo della stringa corrente (che non iniziava con 'a').
*/