import conexao from "../config/conexao.js";

export async function cadastrar(calibracoes) {
    const sql = "INSERT INTO calibracoes (equipamentoId, dataCalibracao, resultado, responsavel) VALUES (?, ?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [calibracoes.equipamentoId, calibracoes.dataCalibracao, calibracoes.resultado, calibracoes.responsavel]);
    return resultado.insertId;
}

export async function listar() {
    const sql = 'SELECT id, data_calibracao FROM calibracoes ORDER BY id';
    const [resultado] = await conexao.execute(sql);
    return resultado;
}


export async function listarDetalhadas() {
    const sql = 'SELECT * FROM calibracoes ORDER BY id';
    const [resultado] = await conexao.execute(sql);
    return resultado;
}
 

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM calibracoes WHERE id = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado[0];
}

export async function atualizar(id, calibracoes) {
    const sql = 'UPDATE calibracoes SET equipamentoId = ?, dataCalibracao = ?, resultado = ?, responsavel = ? WHERE id= ?';
    const [resultado] = await conexao.execute(
        sql, [calibracoes.equipamentoId, calibracoes.dataCalibracao, calibracoes.resultado, calibracoes.responsavel, id]
    );
    return resultado.affectedRows;
}


export async function deletar(id) {
    const sql = 'DELETE FROM calibracoes WHERE id = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}



