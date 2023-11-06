import entrada from 'readline-sync';

let salarioMinimo = [
    {salario: 510.00, ano: 2010},
    {salario: 545.00, ano: 2011},
    {salario: 622.00, ano: 2012},
    {salario: 678.00, ano: 2013},
    {salario: 724.00, ano: 2014},
    {salario: 788.00, ano: 2015},
    {salario: 880.00, ano: 2016},
    {salario: 937.00, ano: 2017},
    {salario: 954.00, ano: 2018},
    {salario: 998.00, ano: 2019},
    {salario: 1045.00, ano: 2020}
];

let inflacao = [
    {IPCA: 5.91, ano: 2010},
    {IPCA: 6.50, ano: 2011},
    {IPCA: 5.84, ano: 2012},
    {IPCA: 5.91, ano: 2013},
    {IPCA: 6.41, ano: 2014},
    {IPCA: 10.67, ano: 2015},
    {IPCA: 6.29, ano: 2016},
    {IPCA: 2.95, ano: 2017},
    {IPCA: 3.75, ano: 2018},
    {IPCA: 4.31, ano: 2019},
    {IPCA: 4.52, ano: 2020}
];

console.log("Escolha uma das alternativas:\n");

console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA \n");

let escolha = entrada.question("Digite o numero da sua escolha: ");
console.log("\n");

switch (escolha) {
    case "1":
        for (let i = 0; i < salarioMinimo.length; i++) {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            
            let label_ano = "Ano";
            let label_salario = "Salário mínimo";
            let salario_formatado = salario.toFixed(2).replace(".", ",");

            console.log(label_ano.padEnd(20, ".") + ": " + ano);
            console.log(label_salario.padEnd(20, ".") + ": R$ " + salario_formatado + "\n");  
        }
        break;
    case "2":
        for (let i = 0; i < inflacao.length; i++) {
            let ano = inflacao[i].ano;
            let ipca = inflacao[i].IPCA;

            let label_ano = "Ano";
            let label_inflacao = "Inflação (IPCA)";
            let ipca_formatado = ipca.toFixed(2).replace(".", ",");

            console.log(label_ano.padEnd(20, ".") + ": " + ano);
            console.log(label_inflacao.padEnd(20, ".") + ": " + ipca_formatado + "%\n");  
        } 
        break;
    case "3":
        for (let i = 0; ((i < salarioMinimo.length) && (i < inflacao.length)) ; i++) {
            let ano_salario = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;

            let ano_inflacao = inflacao[i].ano;
            let ipca = inflacao[i].IPCA;
            
            let label_ano_salario = "Ano";
            let label_salario = "Salário mínimo";
            let salario_formatado = salario.toFixed(2).replace(".", ",");

            let label_inflacao_ipca = "Inflação (IPCA)";
            let label_crescimento_salarial = "Crescimento Salarial";
            let ipca_formatado = ipca.toFixed(2).replace(".", ",");

            if (ano_salario == ano_inflacao) {
                if (ano_salario == 2010) {
                    console.log(label_ano_salario.padEnd(30, ".") + ": " + ano_salario);
                    console.log(label_salario.padEnd(30, ".") + ": R$ " + salario_formatado);

                    console.log(label_crescimento_salarial.padEnd(30, ".") + ": " + "-");
                    console.log(label_inflacao_ipca.padEnd(30, ".") + ": " + ipca_formatado + "%\n");
                }
                else {
                    let diferenca = salario - salarioMinimo[i-1].salario;
                    let crescimento_salarial = ((diferenca / 510) * 100);

                    console.log(label_ano_salario.padEnd(30, ".") + ": " + ano_salario);
                    console.log(label_salario.padEnd(30, ".") + ": R$ " + salario_formatado);

                    let crescimento_salarial_formatado = crescimento_salarial.toFixed(2).replace(".", ",") + "%";
                
                    console.log(label_crescimento_salarial.padEnd(30, ".") + ": " + crescimento_salarial_formatado);
                    console.log(label_inflacao_ipca.padEnd(30, ".") + ": " + ipca_formatado + "%\n");
                }
            }
        }
        break;
    default:
        console.log("Opção Inválida:"); 
        break;
}