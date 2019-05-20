// Laço de Repetição: Do While
var senha = true;
var i = 0;

do {
    console.log(i);
    if (i == 2) {
        senha = false;
    }
    i++;
} while (senha);


// Laço de Repetição: While
// var senha = true;
// var i = 0;

// while (senha) {
//     senha = false;
//     console.log("Entrou!");
//     i++;
// }
// console.log(i);



// Laço de Repetição: For + tipo de variável let
/* var diasDaSemana = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];
console.log(diasDaSemana[0]);
console.log(diasDaSemana[1]);
console.log(diasDaSemana[2]);
console.log(diasDaSemana[3]);
console.log(diasDaSemana[4]);
console.log(diasDaSemana[5]);
console.log(diasDaSemana[6]);

for (let contador = 0; contador < diasDaSemana.length; ++contador){
    console.log(diasDaSemana[contador]);
    if (diasDaSemana[contador] == "Quarta-Feira") {
        break;
    }
}*/



// Boolean: ||
/*var corUm = "verde";
var corDois = "preto";

if (corUm == "verde" || corDois == "amarelo") {
    console.log("Pode ser a bandeira do Brasil");
} else {
    console.log("Outra bandeira");
}
console.log("Programa finalizado!");*/



// Boolean: &&
/*var cnh = true;
var idade = 19;

if (idade >= 18 && cnh == false) {
    console.log("Pode tirar CNH");
} else {
    console.log("Complete a idade mínima ou você já possui CNH.");
}
console.log("Programa finalizado!");*/



// Condicional: Else-if 
/*var diaDaSemana = "Domingo";

diaDaSemana = "Quarta-Feira";

diaDaSemana = "Sexta-Feira";

if (diaDaSemana == "Domingo") {
    console.log("Dia de churrasco! =D");
} else if   (diaDaSemana == "Quarta-Feira") {
    console.log("Dia de feijoada! =D");
} else if   (diaDaSemana == "Sexta-Feira") {
    console.log("Dia de maldade! =D");
} else {
    console.log("Hoje não é dia de churrasco! =(");
}
console.log("Programa finalizado!");*/



// Condicional: Switch-case 
/* var diaDaSemana = "Quarta-Feira";
 diaDaSemana = "Sexta-Feira";

 (diaDaSemana == "Sexta-Feira") ? console.log("Dia de futebol") : console.log("Um dia qualquer");*/

 /*var sintomas = "tossir";

 switch (sintomas) {
    case "tossir":
        console.log("Tuberculose");
        break;
    case "febre":
        console.log("Dengue");
        break;
    default:
        console.log("Virose");
 }*/