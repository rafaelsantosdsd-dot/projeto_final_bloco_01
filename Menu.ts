import { colors } from './src/util/Colors';
import { CardapioController } from './src/controller/CardapioController';
import { Produto } from './src/model/Produto'; // ✅ Importar a classe concreta
import readlinesync = require("readline-sync");

const lanches = new CardapioController();
let opcao, preco, quant, cod: number;
let nomeLanche: string;

export function main() {
    do {
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
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log("Digite o Nome do lanche: ");
                nomeLanche = readlinesync.question(" ");
                console.log("Digite o preço do produto: ");
                preco = readlinesync.questionFloat("R$: ");
                console.log("Digite a quantidade do produto: ");
                quant = readlinesync.questionInt("");
    
    // ✅ Usar a classe concreta Produto
    cod = lanches.gerarNumero();
    const novoLanche = new Produto(nomeLanche, quant, preco, cod);
    lanches.cadLanches(novoLanche);
    break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Lanches\n\n", colors.reset);
                lanches.listarLanches();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nAtualizar produtos: ", colors.reset);
                console.log("Digite o código do Produto: ");
                cod = readlinesync.questionInt("");

                const lancheExistente = lanches.buscarNoArray(cod);

                if (lancheExistente != null) {
                    console.log("Digite a nova quantidade: ");
                    quant = readlinesync.questionInt("");
                    console.log("Digite o novo preço: ");
                    preco = readlinesync.questionFloat("R$: ");

                    // ✅ Atualizar os valores
                    lancheExistente.quant = quant;
                    lancheExistente.preco = preco;
                    
                    lanches.atualizar(lancheExistente);
                } else {
                    console.log(colors.fg.red, "\nO produto numero: " + cod +
                        " não foi encontrado!", colors.reset);
                }
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nPesquisar produtos\n\n");
                console.log("Digite o código: ");
                cod = readlinesync.questionInt("");
                lanches.procurarPorCod(cod);
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nDeletar produtos\n\n", colors.reset);
                console.log("Digite o código do Produto: ");
                cod = readlinesync.questionInt("");
                lanches.deletar(cod);
                break;

            case 9:
                console.log(colors.fg.greenstrong, "\nCasa do Pão de Alho - O melhor!");
                sobre();
                console.log(colors.reset, "");
                break;

            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                break;
        }

        if (opcao !== 9) {
            keyPress();
        }

    } while (opcao !== 9);
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

// ✅ Executar apenas se for o arquivo principal
if (require.main === module) {
    main();
}