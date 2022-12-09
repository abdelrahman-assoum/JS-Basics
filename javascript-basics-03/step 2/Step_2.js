const link = document.querySelectorAll('a')
const text = document.getElementById('texte')

link.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.target.id == 'hide') {
            text.style = 'display: none;'
        } else {
            text.style = 'display: block;'
        }
    })
})