const validateForms = (obj, i) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const andando = !!obj.andando;
    const horario = !!obj.horario;
    const data = !!obj.data;
    const picture = !!obj.picture;
    const animal = !!obj.animal && obj.animal.length >= 3;
    const endereco = !!obj.endereco && obj.endereco.length >= 8;
    const ocorrido = !!obj.ocorrido && obj.ocorrido.length >= 8;
    const descricao = !!obj.descricao && obj.descricao.length >= 8;
    const cidade = !!obj.cidade && obj.cidade.length >= 4;
    const bairro = !!obj.bairro && obj.bairro.length >= 4;

    const nome = !!obj.nome && obj.nome.length >= 3;
    const email = !!obj.email && emailRegex.test(obj.email)

    const validation = {
        1: andando && horario && picture && animal && cidade && endereco && ocorrido,
        2: descricao && endereco && bairro && cidade && data && horario,
        3: nome && email && cidade
    }
    return validation[i];
}

export default validateForms;