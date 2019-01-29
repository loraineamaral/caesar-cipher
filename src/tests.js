function test(calculado, esperado) {

    function cypherEnc(texto, offSet){
    if (calculado === esperado) {
      console.log("Passou!");
      return true;
    }else {
      console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
      return false;
    }
    cypherEnc(("abc", 1), "bcd");

  }