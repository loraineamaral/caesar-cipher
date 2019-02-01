function encode() {
  let texto = document.getElementById("texto").value;
  let offSet = parseInt(document.getElementById("deslocamento").value);
  document.getElementById("textocifrado").innerHTML = cypherEnc(texto, offSet);
}

function cypherEnc(texto, offSet) {
  let textArray = [];
  let ascArray = [];
  let codedText = "";

  for (let i = 0; i < texto.length; i++) {
    textArray.push(texto.charCodeAt(i));
  }
  
  for (j = 0; j < textArray.length; j++) {
    if (textArray[j] >= 65 && textArray[j] <= 90) {
      ascArray.push((((textArray[j] - 65 + offSet) % 26) + 65));
    } else if (textArray[j] >= 97 && textArray[j] <= 122) {
      ascArray.push((((textArray[j] - 97 + offSet) % 26) + 97));
    } else {
      ascArray.push(textArray[j]);
    }
  }
  for (g = 0; g < ascArray.length; g++) {
    codedText += String.fromCharCode(ascArray[g]);
  }

  return codedText;
}

function decode() {
  let texto = document.getElementById("texto").value;
  let offSet = parseInt(document.getElementById("deslocamento").value);
  document.getElementById("textocifrado").innerHTML = cypherDec(texto, offSet); 
}

function cypherDec(texto, offSet) {
  let textArray = [];
  let ascArray = [];
  let decodedText = "";

  for (let i = 0; i < texto.length; i++) {
    textArray.push(texto.charCodeAt(i));
  }
  for (j = 0; j < textArray.length; j++) {
    if (textArray[j] >= 65 && textArray[j] <= 90) {
      ascArray.push(((textArray[j] - 90 - offSet) % 26) + 90);
    } else if (textArray[j] >= 97 && textArray[j] <= 122) {
      ascArray.push(((textArray[j] - 122 - offSet) % 26) + 122);
    } else {
      ascArray.push(textArray[j]);
    }
  }
  for (g = 0; g < ascArray.length; g++) {
    decodedText += String.fromCharCode(ascArray[g]);
  }
  return decodedText
}