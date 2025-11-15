export abstract class Cardapio {

    private _quant: number;
    private _preco: number;
    private _cod: number;

    constructor(quant: number, preco: number, cod: number) {
        this._quant = quant;
        this._preco = preco;
        this._cod =cod;
    }

    public get quant() {
        return this._quant;
    }

    public set quant(quant: number) {
        this._quant = quant;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public get cod() {
        return this._cod;
    }

    public set cod(cod: number) {
        this._cod = cod;
    }

    public visualizar(): void {
    console.log("\n\n*****************************************************");
    console.log("                    DADOS DO CARDAPIO");
    console.log("*****************************************************");
    console.log("Código do Produto: " + this._cod);
    console.log("Quantidade: " + this._quant);
    console.log("Preço Unitário: R$ " + this._preco.toFixed(2));
    console.log("Valor Total: R$ " + (this._preco * this._quant).toFixed(2));
    console.log("*****************************************************\n");
    }

}