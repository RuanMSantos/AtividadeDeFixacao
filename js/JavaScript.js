function Cadastrar(){
    let aluno = [
        {
            "matricula": document.getElementById("matricula").value,
            "nome": document.getElementById("nome").value,
            "data de nascimento": document.getElementById("data").value,
            "curso": document.getElementById("curso").value,
            "sexo": document.getElementById("sexo").value
        }
    ]
    console.log(aluno);
}