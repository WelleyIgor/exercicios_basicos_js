const palavra = prompt("Qual a Palavra que deseja verificar?");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(
    palavra +
      " é um palindromo \n\n\n" +
      palavra +
      " é igual a " +
      palavraInvertida
  );
} else {
  alert(
    palavra +
      " não é um palindromo \n\n\n" +
      palavra +
      " é diferente de " +
      palavraInvertida
  );
}
