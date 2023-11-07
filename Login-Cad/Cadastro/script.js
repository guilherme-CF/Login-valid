let btn = document.querySelector('#verSenha')
let btnConfirme = document.querySelector('#verConfirmeSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmeSenha = document.querySelector('#confirmeSenha')
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')
let validConfirmeSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


//VALIDAÇÃO DAS LABELS


nome.addEventListener('keyup', () => {
    if (nome.value.length <= 3) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = '<strong>Nome * Insira no minino 3 caracteres </strong>'
        nome.setAttribute('style', 'border-color:red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color:aquamarine')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:aquamarine')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = '<strong>Usuario * Insira no minino 4 caracteres </strong>'
        usuario.setAttribute('style', 'border-color:red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color:aquamarine')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color:aquamarine')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length < 6) {
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = '<strong>Senha * Insira no minino 6 caracteres </strong>'
        senha.setAttribute('style', 'border-color:red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color:aquamarine')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:aquamarine')
        validSenha = true
    }
})

confirmeSenha.addEventListener('keyup', () => {
    if (senha.value != confirmeSenha.value) {
        labelConfirmeSenha.setAttribute('style', 'color:red')
        labelConfirmeSenha.innerHTML = '<strong>Confirmar Senha * verifique de repetir a senha </strong>'
        confirmeSenha.setAttribute('style', 'border-color:red')
        validConfirmeSenha = false
    } else {
        labelConfirmeSenha.setAttribute('style', 'color:aquamarine')
        labelConfirmeSenha.innerHTML = 'Confirmar Senha'
        confirmeSenha.setAttribute('style', 'border-color:aquamarine')
        validConfirmeSenha = true
    }
})

//FUNCIONALIDADE DOS CAMPOS


function cadastrar() {
    if (validNome && validUsuario && validSenha && validConfirmeSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = ('<strong> Cadastrado usuario... !!</strong>')
        msgError.setAttribute('style', 'display: none')

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/Login-Cad/Login/index.html'
        }, 2000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = ('<strong> Preencha todos os campos corretamente! <strong>')
        msgSuccess.setAttribute('style', 'display: none')
    }

}



btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})



btnConfirme.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmeSenha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

