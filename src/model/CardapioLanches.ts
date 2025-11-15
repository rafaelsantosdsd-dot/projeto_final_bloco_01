import { Cardapio } from "./Cardapio";

export class CardapioLanches extends Cardapio {

    private _lanches: string;

    constructor(quant: number, preco: number, lanche: string, cod: number) {
        super(quant, preco, cod);
        this._lanches = lanche;
    }

    public get lanche() {
        return this._lanches;
    }

    public set lanche(lanche: string) {
        this._lanches = lanche;
    }
    public visualizar(): void {
    super.visualizar();
    console.log("Lanche: " + this._lanches);
    console.log("*****************************************************\n");
    }

}