import { Router } from "express";
import {cadastrarEquipamento, deletarEquipamento, buscarEquipamentoPorId, atualizarEquipamento, listarEquipamentos} from "../controller/equipamentoController.js";

const router = Router();

router.post("/", cadastrarEquipamento);
router.get("/", listarEquipamentos);
router.get("/:id", buscarEquipamentoPorId);
router.patch("/:id", atualizarEquipamento);
router.delete("/:id", deletarEquipamento);

export default router;
