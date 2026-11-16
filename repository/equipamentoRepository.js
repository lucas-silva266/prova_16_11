import conexao from "../config/conexao.js";

export async function cadastrar(equipamentos) {
    const sql = "INSERT INTO equipamentos (codigoPatrimonio, nome, setor, status) VALUES (?, ?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [equipamentos.codigoPatrimonio, equipamentos.nome, equipamentos.setor, equipamentos.status]);
    return resultado.insertId;
}

export async function listar() {
    const sql = 'SELECT * FROM equipamentos ORDER BY id';
    const [resultado] = await conexao.execute(sql);
    return resultado;
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM equipamentos WHERE id = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado[0];
}

export async function atualizar(id, equipamentos) {
    const sql = 'UPDATE equipamentos SET codigoPatrimonio = ?, nome = ?, setor = ?, status = ? WHERE id = ?';
    const [resultado] = await conexao.execute(
        sql, [equipamentos.codigoPatrimonio, equipamentos.nome, equipamentos.setor, equipamentos.status, id]
    );
    return resultado.affectedRows;
}


export async function deletar(id) {
    const sql = 'DELETE FROM equipamentos WHERE id = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}



