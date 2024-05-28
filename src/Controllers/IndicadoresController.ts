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

        await indicadoresService.insertIndicador();

        return response.status(200).json({ message: "Indicador adicionado!" })

    }

}