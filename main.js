//declaração de elementos DOM
const FORM = document.querySelector("form")
const LOGIN = document.getElementById("login")
const SENHA = document.getElementById("senha")
const BTN_LOGIN = document.getElementById('logar')
const BTN_CADASTRAR = document.getElementById('cadastrar')

//declaração de variável que recebe o dados do localStorage
const DADOS = JSON.parse(localStorage.getItem('cadastros')) || []

//previne o comportamento padrão do formulário
FORM.addEventListener('submit', submit => {
    submit.preventDefault()
})

//coloca o primeiro input em foco
LOGIN.focus()

//instruções no click do botao login
BTN_LOGIN.addEventListener('click', () => {

    //se os inputs estiverem vazios
    if (LOGIN.value.trim() == '' || SENHA.value.trim() == '') {

        mensagens(1)

        return

        //senão
    } else {

        login()

    }

    limpaCampos()

    LOGIN.focus()
})

//instruções no click do botão cadastrar
BTN_CADASTRAR.addEventListener('click', () => {

    //se os inputs estiverem vazios
    if (LOGIN.value.trim() == '' || SENHA.value.trim() == '') {

        mensagens(1)

        return

        //senão
    } else {

        cadastro(DADOS)

    }

    limpaCampos()

    LOGIN.focus()
})

function login() {

    //declaração de variável temporária que recebe os valores do localStorage
    let temp2 = JSON.parse(localStorage.getItem('cadastros')) || []

    //se não for encontrado usuário idêntico ao valor do input
    if (temp2.find(x => x.usuario == LOGIN.value.trim()) == undefined) {

        mensagens(2)

        //senão
    } else {
        //se não for encontrada senha idêntica ao valor do input
        if (temp2.find(x => x.senha == SENHA.value.trim()) == undefined) {
            mensagens(3)
            //senão
        } else {
            mensagens(4)
        }
    }
}

function cadastro(objeto) {

    let temp = LOGIN.value.trim()

    //se for encontrado usuário idêntico ao valor do input
    if (objeto.find(x => x.usuario == temp) !== undefined) {

        mensagens(5)

        //senão
    } else {

        //insere em uma posição da variável o seguinte objeto
        objeto.push(
            {
                usuario: LOGIN.value.trim(),
                senha: SENHA.value.trim()
            }
        )

        //salva a variável no localStorage em formato JSON
        localStorage.setItem('cadastros', JSON.stringify(objeto))

        mensagens(6)
    }
}

//limpa os inputs
function limpaCampos() {
    LOGIN.value = ''
    SENHA.value = ''
}

//seletor de mensagens
function mensagens(caso) {

    switch (caso) {
        case 1:
            alert('Preencha os campos.')
            break;

        case 2:
            alert('Usuário não existe.')
            break;

        case 3:
            alert('Senha incorreta.')
            break;

        case 4:
            alert('Login efetuado com sucesso.')
            break;

        case 5:
            alert('Usuário indisponível.')
            break;

        case 6:
            alert('Cadastro realizado com sucesso.')
            break;
    }
}