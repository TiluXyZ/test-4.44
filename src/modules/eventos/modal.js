import create from '../funciones/create'
import arrows from './arrows'

const modal = (e) => {
    e.preventDefault()
    
    const container = document.getElementById('container')

    const mediaQuery = window.matchMedia("(min-width: 992px)")

    create('div', 'id','main', 'main', container)

    const main = document.getElementById('main')

    create('div', 'id','modal', 'modal', main)

    const modal = document.getElementById('modal')

    create('div', 'id', 'arrows', 'arrows', modal)

    const arrowsDiv = document.getElementById('arrows')

    create('div', 'id', 'arrow-l', 'arrow-left', arrowsDiv)

    create('div', 'id', 'arrow-r', 'arrow-right', arrowsDiv)

    const arrowL = document.getElementById('arrow-l')

    const arrowR = document.getElementById('arrow-r')

    create('span', 'id', 'arrow-left', 'icon-chevron-left', arrowL)

    create('span', 'id', 'arrow-right', 'icon-chevron-right', arrowR)

    const arrowLeft = document.getElementById('arrow-left')

    const arrowRight = document.getElementById('arrow-right')

    if (mediaQuery.matches){

        arrowLeft.classList.replace('icon-chevron-left', 'arrow-l')

        arrowRight.classList.replace('icon-chevron-right', 'arrow-r')

        arrowLeft.textContent = 'Anterior'

        arrowRight.textContent = 'Siguiente'
    }

    create('div', 'id','header', 'header', modal)

    const header = document.getElementById('header')

    create('span', 'id','arrow', 'icon-arrow-left2', header)

    const card = e.path[3]

    const next = card.nextElementSibling;

    const previous = card.previousElementSibling;

    const imgElement = card.firstElementChild

    const imgValue = imgElement.getAttribute('src')

    create('img', 'src', imgValue, 'modal-img', modal)

    const titleElement = imgElement.nextElementSibling

    let titleValue = titleElement.firstElementChild

    titleValue = titleValue.textContent

    create('span', 'id','modal-title', 'modal-title', modal)

    const titleModal = document.getElementById('modal-title');

    titleModal.textContent = titleValue

    create('p', 'id','modal-text', 'modal-text', modal)

    const textModal = document.getElementById('modal-text')

    textModal.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt voluptatem aliquid eveniet praesentium natus, reiciendis cum tempore, dolore qui pariatur, aspernatur vero impedit non. Dolor quaerat eveniet fugiat sed.'

    const arrowIcon = header.firstElementChild

    arrowIcon.addEventListener('click', (e) => {
        main.remove()
    })    

    arrowRight.addEventListener('click', (e) => { 
        arrows(next, mediaQuery)
    })

    arrowLeft.addEventListener('click', (e) => {
        arrows(previous, mediaQuery)
    })
}

export {modal}