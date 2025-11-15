import { Cardapio } from "../model/Cardapio";
import { ILancheRepository } from "../repository/ILancheRepository";
import { colors } from "../util/Colors";

export class CardapioController implements ILancheRepository {
    private listaLanches: Array<Cardapio> = new Array<Cardapio>();
    cod: number = 0;

    procurarPorCod(cod: number): void {
        let buscaLanche = this.buscarNoArray(cod);

        if (buscaLanche != null) {
            buscaLanche.visualizar();
        } else
            console.log(colors.fg.red, "\nO produto numero: " + cod
                + " não foi encontrado!", colors.reset);
    }
    listarLanches(): void {
        for (let lanches of this.listaLanches) {
            lanches.visualizar();
        };
    }
    cadLanches(lanches: Cardapio): void {
        this.listaLanches.push(lanches);
        console.log(colors.fg.green, "\nO produto número: " + lanches.cod +
            " foi cadastrado com sucesso!", colors.reset);
    } 
    atualizar(lanche: Cardapio): void {
        let buscaLanche = this.buscarNoArray(lanche.cod);

        if (buscaLanche != null) {
            this.listaLanches[this.listaLanches.indexOf(buscaLanche)] = lanche;
            console.log(colors.fg.green, "\nO produto numero: " + lanche.cod +
                " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO produto numero: " + lanche.cod +
                " não foi encontrado!", colors.reset);
    }

    deletar(cod: number): void {
        let buscaLanche = this.buscarNoArray(cod);

        if (buscaLanche != null) {
            this.listaLanches.splice(this.listaLanches.indexOf(buscaLanche), 1);
            console.log(colors.fg.green, "\nO produto numero: " + cod +
                " foi apagado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO produto numero: " + cod +
                " não foi encontrado!", colors.reset);
    }

    
    /*Métodos Auxiliares*/

    /*Gerar Número da Conta*/
    public gerarNumero(): number {
        return ++this.cod;
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(cod: number): Cardapio | null {

        for (let conta of this.listaLanches) {
            if (conta.cod === cod)
                return conta;
        }

        return null;
    }

}