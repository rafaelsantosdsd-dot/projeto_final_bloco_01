import { Cardapio } from "./Cardapio";

export class CardapioLanches extends Cardapio {

    private _lanches: string;

    constructor(quant: number, preco: number, lanches: string, cod: number) {
        super(quant, preco, cod);
        this._lanches = lanches;
    }

    public get lanche() {
        return this._lanches;
    }

    public set lanche(lanches: string) {
        this._lanches = lanches;
    }
    public visualizar(): void {
    super.visualizar();
    console.log("Lanche: " + this._lanches);
    console.log("*****************************************************\n");
    }

}