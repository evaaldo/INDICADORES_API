import { Router } from "express";
import { Request, Response } from "express";

export const router = Router();

// Public route
router.get("/", (request: Request, response: Response) => { return response.status(200).json({ message: "Working on main route..." }) })