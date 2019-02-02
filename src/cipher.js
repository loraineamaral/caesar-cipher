function encode() {
  let userInput = document.getElementById("userInput").value;
  let offSet = parseInt(document.getElementById("userOffset").value);
  document.getElementById("changedText").innerHTML = cypherEnc(userInput, offSet);
}

function cypherEnc(userInput, offSet) {
  let textArray = [];
  let ascArray = [];
  let codedText = "";

  for (let i = 0; i < userInput.length; i++) {
    textArray.push(userInput.charCodeAt(i));
  }

  if (offSet > 0) {
    for (j = 0; j < textArray.length; j++) {
      if (textArray[j] >= 65 && textArray[j] <= 90) {
        ascArray.push((((textArray[j] - 65 + offSet) % 26) + 65));
      } else if (textArray[j] >= 97 && textArray[j] <= 122) {
        ascArray.push((((textArray[j] - 97 + offSet) % 26) + 97));
      } else {
        ascArray.push(textArray[j]);
      }
    }
  }
  else {
    for (j = 0; j < textArray.length; j++) {
      if (textArray[j] >= 65 && textArray[j] <= 90) {
        ascArray.push(((textArray[j] - 90 + offSet) % 26) + 90);
      } else if (textArray[j] >= 97 && textArray[j] <= 122) {
        ascArray.push((((textArray[j] - 122 + offSet) % 26) + 122));
      }
      else {
        ascArray.push(textArray[j]);
      }
    }
  }
  for (g = 0; g < ascArray.length; g++) {
    codedText += String.fromCharCode(ascArray[g]);
  }

  return codedText;
}

function decode() {
  let userInput = document.getElementById("userInput").value;
  let offSet = parseInt(document.getElementById("userOffset").value);
  document.getElementById("changedText").innerHTML = cypherDec(userInput, offSet);
}

function cypherDec(userInput, offSet) {
  let textArray = [];
  let ascArray = [];
  let decodedText = "";

  for (let i = 0; i < userInput.length; i++) {
    textArray.push(userInput.charCodeAt(i));
  }

  if (offSet > 0) {
    for (j = 0; j < textArray.length; j++) {
      if (textArray[j] >= 65 && textArray[j] <= 90) {
        ascArray.push(((textArray[j] - 90 - offSet) % 26) + 90);
      } else if (textArray[j] >= 97 && textArray[j] <= 122) {
        ascArray.push(((textArray[j] - 122 - offSet) % 26) + 122);
      } else {
        ascArray.push(textArray[j]);
      }
    }
  }
  else {
    for (j = 0; j < textArray.length; j++) {
      if (textArray[j] >= 65 && textArray[j] <= 90) {
        ascArray.push((((textArray[j] - 65 - offSet) % 26) + 65));
      } else if (textArray[j] >= 97 && textArray[j] <= 122) {
        ascArray.push((((textArray[j] - 97 - offSet) % 26) + 97));
      } else {
        ascArray.push(textArray[j]);
      }
    }
  }
  for (g = 0; g < ascArray.length; g++) {
    decodedText += String.fromCharCode(ascArray[g]);
  }
  return decodedText
}