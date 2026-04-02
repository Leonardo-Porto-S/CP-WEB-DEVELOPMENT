// Cadastro de vinho

let nome = prompt("Digite o nome do vinho:");
let tipo = prompt("Digite o tipo (Tinto, Branco ou Rosé):");
let safra = prompt("Digite o ano da safra:");
let quantidade = prompt("Digite a quantidade em estoque:");

// Aviso de cadastro
alert("Cadastro realizado! Veja os detalhes no console.");

// Aviso antes de mostrar no console
alert("A seguir, veja os detalhes do vinho no console.");

// Exibição organizada
console.log("===== DADOS DO VINHO =====");
console.log("Nome: " + nome);
console.log("Tipo: " + tipo);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidade);
console.log("==========================");