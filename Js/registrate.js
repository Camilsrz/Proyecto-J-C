const registrate = document.querySelector('#registrate')
registrate.addEventListener('submit', (e)=>{ 
    e.preventDefault()
    const nombre = document.querySelector ('#nombre').value
    const apellido = document.querySelector ('#apellido').value
    const email = document.querySelector ('#email').value
    const contraseña = document.querySelector ('#contraseña').value
    const femenino = document.querySelector ('#femenino').value
    const masculino = document.querySelector ('#masculino').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email == email)
    if(isUserRegistered){
        return alert ('el usuario ya esta registrado')
    }
    Users.push({nombre: nombre, apellido: apellido, email: email, contraseña: contraseña, femenino: femenino, masculino: masculino})
    localStorage.setItem('users', JSON.stringify(Users))
    alert ('Registro Exitoso!')
    window.location.href = 'iniciar sesion.html'
})