//strings
const email = 'erika@gmail.com';
console.log(email);

//Concatenação
const firstName = 'Erika';
const lastName = 'Santana';
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

//Acessando caracteres
console.log(fullName[0]);
//Comprimento de uma string
console.log(fullName.length);
//métodos de string/ letra Maiuscula
console.log(fullName.toUpperCase());
//armazenando um metodo em uma variacel/ letra minuscula
const result = fullName.toLowerCase();
console.log(result, fullName);

//encontrar o caracter dentro do index/ indexOf('@') se chama argumento
const index = email.indexOf('@');
console.log(index)
