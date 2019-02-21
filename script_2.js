//script2  Factorielle

 var n = prompt ("De quel nombre veut tu calculer la factorielle ?");
  console.log("tu as demandé la factorielle de " + n);
  
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log("Le résultat est : " + factorial(n) );

    