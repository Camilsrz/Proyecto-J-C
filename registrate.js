const registrate = document.getElementById("registrate")
if(registrate){
    registrate.addEventListener("submit", (e) => {
        e.preventDefault ()
        const nombre = document.getElementById("nombre").value
        const email = document.getElementById("email").value
        const contraseña = document.getElementById("contraseña").value
        const user ={ nombre, email, contraseña}
        const users = JSON.parse(localStorage.getItem("USERS")) || []
        localStorage.setItem("Users", JSON.stringify([...users, user])) 
        window.location = "./iniciar sesion.html"})
}   