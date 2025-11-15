import { CardapioLanches } from "./src/model/CardapioLanches";
 
console.log("\n=== TESTE DO CARDÁPIO DE LANCHES ===\n");
 
const lanche = new CardapioLanches(
    2,              // quantidade
    15.50,          // preço
    "X-Burguer",    // nome do lanche
    101             // código
);
 
console.log("Exibindo informações do lanche (polimorfismo):");
lanche.visualizar();
 
console.log("\nAlterando o nome do lanche...");
lanche.lanche = "X-Burguer Especial";
 
console.log("\nExibindo novamente:");
lanche.visualizar();
 
console.log("\nTeste concluído com sucesso!\n");