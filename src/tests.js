function cypherTests(calculado, esperado) {
    if (calculado === esperado) {
      console.log("Passou!");
      return true;
    }else {
      console.log("O resultado foi igual a: " + calculado + " Diferente de: " + esperado);
      return false;
    }
  }

cypherTests(cypherEnc("abc", 33), "hij");
cypherTests(cypherEnc("AZUL", 1), "BAVM");
cypherTests(cypherEnc("AZUL", -1), "VAGC"); //não passa
cypherTests(cypherEnc("AZUL", -9), "RQLC");
cypherTests(cypherEnc("Banana!*/", 24), "Zylyly!*/");
cypherTests(cypherEnc("Rua 768", 14), "Fio 768");
cypherTests(cypherEnc("Rua 768", 26), "Rua 768");

cypherTests(cypherDec("hij", 33), "abc");
cypherTests(cypherDec("BAVM", 1), "AZUL");
cypherTests(cypherDec("VAGC", 1), "AZUL"); //não passa
cypherTests(cypherDec("RQLC", -9), "AZUL");
cypherTests(cypherDec("Zylyly!*/", 24), "Banana!*/");
cypherTests(cypherDec("Fio 768", 14), "Rua 768");
cypherTests(cypherDec("Rua 768", 26), "Rua 768");
