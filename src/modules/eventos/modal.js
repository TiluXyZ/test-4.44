import create from '../funciones/create'

const modal = (e) => {
    e.preventDefault()
    
    const container = document.getElementById('container')

    create('div', 'id','main', 'main', container)

    const main = document.getElementById('main')

    create('div', 'id','modal', 'modal', main)

    const modal = document.getElementById('modal')

    create('div', 'id','header', 'header', modal)

    const header = document.getElementById('header')

    create('span', 'id','arrow', 'icon-arrow-left2', header)

    const card = e.path[3]

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

    arrowIcon.addEventListener('click', () => {
        main.remove()
    })
}

export {modal}