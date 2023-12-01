const iniciarsesion = document.getElementById("iniciar sesion")
if(iniciarsesion){
    iniciarsesion.addEventListener("submit", (e) => {
     e.preventDefault ()
     const nombre = document.getElementById("nombre").value
     const email = document.getElementById("email").value
     const contraseña = document.getElementById("contraseña").value
     const user = { nombre, email, contraseña }
     window.location = "./home.html"
    })
}
