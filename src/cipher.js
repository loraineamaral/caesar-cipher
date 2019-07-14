function banana(buttonId) {
  let userInput = document.getElementById('userInput').value
  let offSet = parseInt(document.getElementById('userOffset').value);

  if (buttonId === "encode") {
    document.getElementById('changedText').innerHTML = cypherEnc(userInput, offSet)
  } else {
    document.getElementById('changedText').innerHTML = cypherDec(userInput, offSet);
  }
}

function cypherEnc(userInput, offSet) {
  let textArray = [];
  let ascArray = [];
  let codedText = '';

  for (i in userInput) {
    textArray.push(userInput.charCodeAt(i));
  }

  for (j of textArray) {
    if (j >= 65 && j <= 90) {
      ascArray.push((((j - 65) + (offSet % 26) + 26) % 26) + 65);
    } else if (j >= 97 && j <= 122) {
      ascArray.push((((j - 97) + (offSet % 26) + 26) % 26) + 97);
    } else {
      ascArray.push(j);
    }
  }

  for (g in ascArray) {
    codedText += String.fromCharCode(ascArray[g]);
  }

  return codedText;
}

function cypherDec(userInput, offSet) {
  let textArray = [];
  let ascArray = [];
  let decodedText = '';

  for (i in userInput) {
    textArray.push(userInput.charCodeAt(i));
  }

  for (j of textArray) {
    if (j >= 65 && j <= 90) {
      ascArray.push((((j - 65) - (offSet % 26) + 26) % 26) + 65);
    } else if (j >= 97 && j <= 122) {
      ascArray.push((((j - 97) - (offSet % 26) + 26) % 26) + 97);
    } else {
      ascArray.push(j);
    }
  }

  for (g in ascArray) {
    decodedText += String.fromCharCode(ascArray[g]);
  }

  return decodedText;
}

function clearScreen () {
  document.getElementById('userInput').value ='';
  document.getElementById('userOffset').value ='';
  document.getElementById('changedText').value ='';
}