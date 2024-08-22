const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/usuarios');
const ReceitasController = require('../controllers/receitas');
const DespesasController = require('../controllers/despesas');
const ClassificacaoController = require('../controllers/classificacao');

router.get('/usuarios', UsuariosController.listarUsuarios);
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/receitas', ReceitasController.listarReceitas);
router.post('/receitas', ReceitasController.cadastrarReceitas); 
router.patch('/receitas', ReceitasController.editarReceitas); 
router.delete('/receitas', ReceitasController.apagarReceitas); 

router.get('/despesas', DespesasController.listarDespesas);
router.post('/despesas', DespesasController.cadastrarDespesas); 
router.patch('/despesas', DespesasController.editarDespesas); 
router.delete('/despesas', DespesasController.apagarDespesas); 

router.get('/classificacao', ClassificacaoController.listarClassificacao);
router.post('/classificacao', ClassificacaoController.cadastrarClassificacao); 
router.patch('/classificacao', ClassificacaoController.editarClassificacao); 
router.delete('/classificacao', ClassificacaoController.apagarClassificacao); 

module.exports = router;