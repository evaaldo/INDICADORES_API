import { Request, Response } from "express";
import { IndicadoresService } from "../Services/IndicadoresService";

const indicadoresService = new IndicadoresService();

export class IndicadoresController {

    async getAllIndicadores(request: Request, response: Response) {

        const IndicadoresList = await indicadoresService.getAllIndicadores();

        return response.status(200).json(IndicadoresList);

    };

    async addIndicador(request: Request, response: Response) {

        const indicador = request.body;

        await indicadoresService.insertIndicador(indicador.numChamado, indicador.titulo, indicador.situacao, indicador.dataAbertura, indicador.dataSLA);

        return response.status(200).json({ message: "Indicador adicionado!" });

    }

    async updateIndicador(request: Request, response: Response) {

        const indicadorAtualizado = request.body;
        const numChamado = request.params.id

        await indicadoresService.updateIndicador(numChamado, indicadorAtualizado.titulo, indicadorAtualizado.situacao, indicadorAtualizado.dataAbertura, indicadorAtualizado.dataSLA);

        return response.status(200).json({ message: "Indicador atualizado!" });

    }

    async deleteIndicador(request: Request, response: Response) {

        const numChamado = request.params.id;

        await indicadoresService.deleteIndicador(numChamado);

        return response.status(200).json({ message: "Indicador apagado!" });

    }

}