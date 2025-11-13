export abstract class Produto {

    private _quant: number;
    private _lanche: string;
    private _bebida: string;
    private _preco: number;

    constructor(quant: number, lanche: string, bebida: string, preco: number) {
        this._quant = quant;
        this._lanche = lanche;
        this._preco = preco;
        this._bebida = bebida;
    }

    public get quant() {
        return this._quant;
    }

    public set quant(quant: number) {
        this._quant = quant;
    }

    public get lanche() {
        return this._lanche;
    }

    public set lanche(lanche: string) {
        this._lanche = lanche;
    }
    public get bebida() {
        return this._bebida;
    }

    public set bebida(bebida: string) {
        this._bebida = bebida;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

}