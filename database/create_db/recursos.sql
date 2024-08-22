select* from usuario;
select*from despesas;
select*from classificacao;
select*from receitas;
select* from tipos_despesa;

UPDATE usuario set usu_nome='vitoria' where usu_id=1;

UPDATE despesas set des_data_vencimento='2027-09-08' where des_id=1;

UPDATE classificacao set cla_descricao='anual' where cla_id=1;

UPDATE receitas set rec_valor='400.00' where rec_id=1;

UPDATE tipos_despesa set tp_descricao='manicure' where tp_id=1;


DELETE from usuario where usu_id=1;

DELETE from receitas where usu_id=1;

DELETE from despesas where tp_id=1;

DELETE FROM despesas where des_id=1;

DELETE FROM tipos_despesa where usu_id=1;

DELETE FROM tipos_despesa where tp_id=1;

DELETE FROM despesas where usu_id=1;

DELETE FROM classificacao where usu_id=1;

DELETE FROM classificacao where cla_id=1;

DELETE FROM receitas where rec_id=1;