import { Router } from "express";
import {cadastrarCalibracao, deletarCalibracao, atualizarCalibracao, buscarCalibracaoPorId, listarCalibracoes, listarCalibracoesDetalhadas} from "../controller/calibracaoController.js";

const router = Router();

router.post("/", cadastrarCalibracao);
router.get("/", listarCalibracoes);
router.get("/detalhadas", listarCalibracoesDetalhadas);
router.get("/:id", buscarCalibracaoPorId);
router.patch("/:id", atualizarCalibracao);
router.delete("/:id", deletarCalibracao);

export default router;
