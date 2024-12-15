const html = document.querySelector('html')
const darkIcon = document.querySelector('svg#dark-mode')
const lightIcon = document.querySelector('svg#light-mode')

/**
 * Switch between light and dark mode
 * @param {light | dark} theme light | dark
 * @default light 
*/
function switchColorMode(theme) {
    if (theme == 'light') {
        html.classList.remove('theme-dark')
        html.classList.add('theme-light')
        darkIcon.style.display = 'inline'
        lightIcon.style.display = 'none'
    }
    else if (theme == 'dark') {
        html.classList.remove('theme-light')
        html.classList.add('theme-dark')
        darkIcon.style.display = 'none'
        lightIcon.style.display = 'inline'
    }
}

function checkColorMode() {
    if (html.classList.value.includes('theme-light')) {
        darkIcon.style.display = 'inline'
        lightIcon.style.display = 'none'
    }
}

checkColorMode()

darkIcon.addEventListener('click', function() {
    switchColorMode('dark')
})

lightIcon.addEventListener('click', function() {
    switchColorMode('light')
})