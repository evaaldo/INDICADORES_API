import { sql } from "../database/db"

export class IndicadoresService {

    async getAllIndicadores() {

        const chamados =  sql`SELECT * FROM CHAMADOS`;

        return chamados;

    }

    async insertIndicador(numChamado: string, titulo: string, situacao: string, dataAbertura: string, dataSLA: string) {
        
        await sql`INSERT INTO CHAMADOS VALUES(${numChamado}, ${titulo}, ${situacao}, ${dataAbertura}, ${dataSLA})`

    }

}