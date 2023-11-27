const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'iniciarsesion.html'
}

const cerrarsesion = document.querySelector('#cerrarsesion')

cerrarsesion.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'index.html'
})