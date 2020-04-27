import {modal} from './modules/eventos/modal'

const button = document.querySelectorAll('.info')

button.forEach(link => {
    link.addEventListener('click', modal)
})


