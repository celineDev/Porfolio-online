const header = document.querySelector('header')
const toggle = document.querySelector('.toggle')
const btn = document.querySelector('.burger-btn')

const currentDate = document.querySelector('.currentYear')
const date = new Date()
const currentYear = date.getFullYear()
currentDate.innerText = currentYear

window.addEventListener('resize', () => {
    if (header.classList.contains('open') && innerWidth > 959) {
        header.classList.remove('open')
        toggle.style.display = 'none'
    }
})

function handleMenu () {
    btn.addEventListener('click', () => {
        if (header.classList.contains('open')) {
            header.classList.remove('open')
            toggle.style.display = 'none'
        } else {
            header.classList.add('open')
            toggle.style.display = 'inline-block'
        }
    })
}

handleMenu()
