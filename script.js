function validar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var telefone = document.getElementById('endereço').value;
    var telefone = document.getElementById('cep').value;
    var cpf = document.getElementById('CPF').value;
    var cpf = document.getElementById('CNPJ').value;
    var senha = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirmSenha').value;
    if (!nome) {
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo nome'
        return false;
    }
    if(!email){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo email'
        document.getElementById('email').focus()
        return false;
    }
    if(!telefone){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo telefone'
        return false;
    }
    if(!endereço){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo endereço'
        return false;
    }

    if(!cep){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CEP'
        return false;
    }

    if(!cnpj){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CNPJ'
        return false;
    }

    if(!cpf){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CPF'
        return false;
    }


    if(!senha){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo senha'
        return false;
    }
    if(!confirmSenha){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo Confirmar Senha'
        return false;
    }
    if(senha != confirmSenha){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Senhas erradas'
        return false;
    }
}