import express from "express";
import { router } from "./routes";

export const app = express()

app.listen(3000, () => console.log("App is running..."))
app.use(express.json());
app.use(router);