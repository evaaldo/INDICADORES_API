import { sql } from "../database/db"

export class IndicadoresService {

    async getAllIndicadores() {

        const chamados =  sql`SELECT * FROM CHAMADOS`;

        return chamados;

    }

    async insertIndicador(numChamado: string, titulo: string, situacao: string, dataAbertura: string, dataSLA: string) {
        
        await sql`INSERT INTO CHAMADOS VALUES(${numChamado}, ${titulo}, ${situacao}, ${dataAbertura}, ${dataSLA})`

    }

    async updateIndicador(numChamado: string, titulo: string, situacao: string, dataAbertura: string, dataSLA: string) {

        await sql`UPDATE CHAMADOS SET TITULO = ${titulo}, SITUACAO = ${situacao}, DATA_ABERTURA = ${dataAbertura}, DATA_SLA = ${dataSLA} WHERE NUM_CHAMADO = ${numChamado}`;

    }

    async deleteIndicador(numChamado: string) {

        await sql`DELETE FROM CHAMADOS WHERE NUM_CHAMADO = ${numChamado}`;

    }

}