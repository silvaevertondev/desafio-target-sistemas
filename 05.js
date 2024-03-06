function inverterString(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      novaString += string[i];
    }
    return novaString;
  }

  const string = "Roma";
  const stringInvertida = inverterString(str);
  
  console.log(`String original: ${string}`); // Roma
  console.log(`String invertida: ${stringInvertida}`); // amoR
  
