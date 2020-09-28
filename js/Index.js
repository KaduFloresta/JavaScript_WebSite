function CriarUsuario() {
    if ($("#nome").val() == null || $("#sobrenome").val() == "") {
        alert("Preencher todos os campos!");
        return false;
    }
    else {
        let nome = document.getElementById("nome").value;
        let sobrenome = document.getElementById("sobrenome").value;
        let dataNascimento = document.getElementById("dataNascimento").value;
        let cpf = document.getElementById("cpf").value;
        let rua = document.getElementById("rua").value;
        let numero = document.getElementById("numero").value;
        let cidade = document.getElementById("cidade").value;
        let estado = document.getElementById("estado").value;

        let tblUsuarios = document.getElementById("tabelaUsuarios");

        let linha = tblUsuarios.insertRow();

        let cel1 = linha.insertCell(0);
        let cel2 = linha.insertCell(1);
        let cel3 = linha.insertCell(2);
        let cel4 = linha.insertCell(3);
        let cel5 = linha.insertCell(4);
        let cel6 = linha.insertCell(5);
        let cel7 = linha.insertCell(6);
        let cel8 = linha.insertCell(7);
        let cel9 = linha.insertCell(8);
        let cel10 = linha.insertCell(9);


        cel1.innerHTML = nome;
        cel2.innerHTML = sobrenome;
        cel3.innerHTML = dataNascimento;
        cel4.innerHTML = cpf;
        cel5.innerHTML = rua;
        cel6.innerHTML = numero;
        cel7.innerHTML = cidade;
        cel8.innerHTML = estado;
        cel9.innerHTML = "<input type='button' class='btn btn-warning' value='Editar' onclick='EditarCel(this)'>"
        cel10.innerHTML = "<input type='button' class='btn btn-danger' value='Excluir' onclick='ExcluirCel(this)'>"

        console.log(nome);
        console.log(sobrenome);
        console.log(dataNascimento);
        console.log(cpf);
        console.log(rua);
        console.log(numero);
        console.log(cidade);
        console.log(estado);
    }
}

function ExcluirCel(obj) {
    let confirmarExclusao = confirm("Deseja realmente exluir o Usuário?");

    if (confirmarExclusao && obj.parentNode != undefined && obj.parentNode.parentNode != undefined) {
        obj.parentNode.parentNode.remove();
    }
}

var arrayCels = "";
function EditarCel(obj) {
    arrayCels = obj.parentNode.parentNode.childNodes;

    let nome = arrayCels[0].innerText;
    let sobrenome = arrayCels[1].innerText;
    let dataNascimento = arrayCels[2].innerText;
    let cpf = arrayCels[3].innerHTML;
    let rua = arrayCels[4].innerText;
    let numero = arrayCels[5].innerHTML;
    let cidade = arrayCels[6].innerHTML;
    let estado = arrayCels[7].innerHTML;

    document.getElementById("nome").value = nome;
    document.getElementById("sobrenome").value = sobrenome;
    document.getElementById("dataNascimento").value = dataNascimento;
    document.getElementById("cpf").value = cpf;
    document.getElementById("rua").value = rua;
    document.getElementById("numero").value = numero;
    document.getElementById("cidade").value = cidade;
    document.getElementById("estado").value = estado;

    document.getElementById("btnCriar").style.display = "none";
    document.getElementById("btnEditar").style.display = "block";
}

function EditarUsuario() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let cpf = document.getElementById("cpf").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    arrayCels[0].innerText = nome;
    arrayCels[1].innerText = sobrenome;
    arrayCels[2].innerText = dataNascimento;
    arrayCels[3].innerText = cpf;
    arrayCels[4].innerText = rua;
    arrayCels[5].innerText = numero;
    arrayCels[6].innerText = cidade;
    arrayCels[7].innerText = estado;

    document.getElementById("btnCriar").style.display = "block";
    document.getElementById("btnEditar").style.display = "none";
}

// Validações
function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mTel(tel) {
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;
}

function mCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, "")
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2")
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2")
    return cnpj
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2")
    return cep
}

function mNum(num) {
    num = num.replace(/\D/g, "")
    return num
}
