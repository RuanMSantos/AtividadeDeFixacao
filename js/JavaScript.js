function Cadastrar(){
    let aluno = [
        {
            "matricula": 14433,
            "nome": "Breno Vaz Borges",
            "data nascimento": "12/06/2005",
            "curso": "Turismo",
            "genêro":"masculino"
        },
        {
            "matricula": 14466,
            "nome": "Gabriel Duarte",
            "data nascimento": "08/10/2007",
            "curso": "Informática",
            "genêro":"masculino"
        },
        {
            "matricula": 12335,
            "nome": "Ruan Cauan",
            "data nascimento": "08/01/2005",
            "curso": "ADM",
            "genêro":"masculino"
        },
        {
            "matricula": 13454,
            "nome": "Nicholas Pietro",
            "data nascimento": "07/11/2006",
            "curso": "Informática",
            "genêro":"masculino"
        },
        {
            "matricula": 170,
            "nome": "Zé",
            "data nascimento": "09/02/1993",
            "curso": "Informática",
            "genêro":"masculino"
        }
    ]
    console.log(aluno);
    
    let filter_genero = aluno.filter(a => a.genêro == "feminino");
    let filter_genero_curso = aluno.filter(a => a.genêro == "masculino" && a.curso == "Informática");
    let filter_matricula = aluno.filter(a => a.matricula  > 100);

    console.log(filter_genero);
    console.log(filter_genero_curso);
    console.log(filter_matricula);
}