let nombre, apellido, usuario, email, address, country

let formulario = document.getElementById('form')



formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()
})

function LeerData(){
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getAnimations('username').value
    email = document.getAnimations('email').value
    address = document.getAnimations('address').value
    country = document.getAnimations('country').value

    GuardarLocalStorage(nombre, apellido, usuario, email, address, country)

}

function GuardarLocalStorage(nombre, apellido, usuario, email, address, country){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Usuario',usuario)
    localStorage.setItem('Email',email)
    localStorage.setItem('Address',address)
    localStorage.setItem('Country',country)
}

function ExtraerLocalStorage(){
    let nom = localStorage.getItem('Nombre',nombre)
    alert('Bienvenido', nom)
    let nom = localStorage.getItem('Apellido',apellido)
    let nom = localStorage.getItem('Usuario',usuario)
    let nom = localStorage.getItem('Email',email)
    let nom = localStorage.getItem('Address',address)
    let nom = localStorage.getItem('Country',country)
}
