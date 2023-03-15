const header = document.querySelector('header')
const toggle = document.querySelector('.toggle')
const btn = document.querySelector('.burger-btn')

const currentDate = document.querySelector('.currentYear')
const date = new Date()
const currentYear = date.getFullYear()
currentDate.innerText = currentYear

// Close burger menu when the window is maximized
window.addEventListener('resize', () => {
    if (header.classList.contains('open') && innerWidth > 959) {
        header.classList.remove('open')
        toggle.style.display = 'none'
    }
})

// Burguer menu open and close
handleMenu()

// scroll smoothly to link
handleClick()

function handleMenu() {
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

function handleClick() {
    const tabs = document.querySelectorAll('.link')
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault()
            let target = tab.getAttribute('href')
            if (target.charAt(0) === '#') {
                const offset = document.querySelector(target).offsetTop - 160
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                })
            }
        })
    })
}
