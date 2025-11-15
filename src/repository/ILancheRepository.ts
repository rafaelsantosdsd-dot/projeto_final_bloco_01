import { Cardapio } from "../model/Cardapio";

export interface ILancheRepository {

	// CRUD 
	procurarPorCod(numero: number): void;
	listarLanches(): void;
	cadLanches(lanche: Cardapio): void;
	deletar(numero: number): void;
		
}
