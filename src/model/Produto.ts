import { Cardapio } from "./Cardapio";

export class Produto extends Cardapio {
    private _nome: string;

    constructor(nome: string, quant: number, preco: number, cod: number) {
        super(quant, preco, cod);
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public visualizar(): void {
        console.log("\n\n*****************************************************");
        console.log("                    DADOS DO PRODUTO");
        console.log("*****************************************************");
        console.log("Nome do Produto: " + this._nome);
        console.log("Código do Produto: " + this.cod);
        console.log("Quantidade: " + this.quant);
        console.log("Preço Unitário: R$ " + this.preco.toFixed(2));
        console.log("Valor Total: R$ " + (this.preco * this.quant).toFixed(2));
        console.log("*****************************************************\n");
    }
}