import { Router } from "express";
import FinanceController from "../controllers/finance-controllers.js";

const financeRouter = Router();
const financeControllers = new FinanceController();

// listar todos
financeRouter.get("/all", financeControllers.listAll);

// listar por ID
financeRouter.get("/single/:id", financeControllers.listById);

// Criar novo
financeRouter.post("/create", financeControllers.createNewFinance);

// Atualizar
financeRouter.put("/refresh/:id", financeControllers.refreshFinance);

// Deletar
financeRouter.delete("/delete/:id", financeControllers.deleteFinance);

export default financeRouter;
