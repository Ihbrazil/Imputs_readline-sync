import entrada from 'readline-sync';

console.log("Aplicação de Juros:\n");

let valorTotal = 0;
let taxaJuros = 0;
let valorDevido = entrada.question("Informe o valor devido: R$ ");

if (valorDevido > 0) {
    let diasAtraso = entrada.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    if (diasAtraso > 0) {
       if (diasAtraso > 15) {
            taxaJuros = 10;
        }
        else {
            taxaJuros = 5;
        }
        
        let valorJuros = (valorDevido / 100) * taxaJuros;
        valorTotal = Number(valorDevido) + Number(valorJuros);

        console.log("\nValor original da dívida: R$ " + valorDevido);
        console.log("Dias atrasados: " + diasAtraso);
        console.log("Taxa de Juros: " + taxaJuros + "%");
        console.log("Valor total com juros: R$ " + valorTotal + "\n");
    }
    else  {
        
        console.log("Você está em dia\n");
    
    }
}
else {
    console.log("O valor da dívida deve ser maior que zero!");
}