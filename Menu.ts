import { colors } from './src/util/Colors';
import { Cardapio } from './src/model/Cardapio';
import readlinesync = require("readline-sync");
let opcao, preco, quant, cod: number
let lanche: string

export function main() {
    console.log(colors.bg.black, colors.fg.yellow,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("--------------- Casa do Pão de Alho -----------------");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar lanches                    ");
        console.log("            2 - Listar lanches                       ");
        console.log("            3 - Atualizar Itens                      ");
        console.log("            4 - Pesquisar Itens                      ");
        console.log("            5 - Excluir produto                      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

         if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nCasa do Pão de Alho - O melhor!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }
         switch (opcao) {
            case 1: 
            console.log("Digite o Nome do lanche: ");
            lanche = readlinesync.question(" ");
            console.log("Digite o preço do produto: ");
            preco = readlinesync.questionFloat("R$: ")
            console.log("Digite o código do produto: ");
            cod = readlinesync.questionInt()  
            console.log("Digite a quantidade do produto: ");
            quant = readlinesync.questionInt()  

            keyPress()
            break;   

            case 2:
             console.log(colors.fg.whitestrong, "\n\nListar todos os Lanches\n\n", colors.reset);

            keyPress()
            break;   

            case 3: 
            console.log(colors.fg.whitestrong, "\n\nAtualizar produtos: ", colors.reset);

            keyPress()
            break;   
            case 4: 
            console.log(colors.fg.whitestrong, "\n\nPesquisar produtos: ", colors.reset);

            keyPress()
            case 5: 
            console.log(colors.fg.whitestrong, "\n\nDeletar produtos: ", colors.reset);

            keyPress()
            break;     
            
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
                
         }   

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Rafael Dantas ");
    console.log("https://github.com/rafaelsantosdsd-dot/projeto_final_bloco_01.git");
    console.log("*****************************************************");
    }

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
    }
}
main()