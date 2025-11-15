import { Cardapio } from "../model/Cardapio";

export interface ILancheRepository {

	// CRUD 
	cadLanches(lanche: Cardapio): void;
	procurarPorCod(numero: number): void;
	listarLanches(): void;
	atualizar(lanche: Cardapio): void;	
	deletar(numero: number): void;
}	
