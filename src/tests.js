function testEnc(calculado, esperado) {
    if (calculado === esperado) {
      console.log("Passou!");
      return true;
    }else {
      console.log("O resultado foi igual a: " + calculado + " Diferente de: " + esperado);
      return false;
    }
  }

console.log("Teste para a função Cifrar: ")
testEnc(cypherEnc("abc", 33), "hij");
testEnc(cypherEnc("BANANA", 1), "DCPCPC");
testEnc(cypherEnc("BANANA", 1), "CBOBOB");
testEnc(cypherEnc("Banana!", 1), "Cbobob!");
testEnc(cypherEnc("Rua 768", 14), "Fio 768");
testEnc(cypherEnc("Rua 768", 26), "Rua 768");

function testDec(calculado, esperado) {
  if (calculado === esperado) {
    console.log("Passou!");
    return true;
  }else {
    console.log("O resultado foi igual a: " + calculado + " Diferente de: " + esperado);
    return false;
  }
}

console.log("Teste para a função Decifrar: ")
testDec(cypherDec("hij", 33), "abc");
testDec(cypherDec("DCPCPC", 1), "BANANA");
testDec(cypherDec("CBOBOB", 1), "BANANA");
testDec(cypherDec("Cbobob!", 1), "Banana!");
testDec(cypherDec("Fio 768", 14), "Rua 768");
testDec(cypherDec("Rua 768", 26), "Rua 768");
