import { Router } from "express";
import { Request, Response } from "express";
import { IndicadoresController } from "./Controllers/IndicadoresController";

const indicadoresController = new IndicadoresController()

export const router = Router();

// Rotas públicas
router.get("/", (request: Request, response: Response) => { return response.status(200).json({ message: "Working on main route..." }) });

// Rotas de chamados
router.get("/listarChamados", indicadoresController.getAllIndicadores);
router.post("/adicionarChamado", indicadoresController.addIndicador);