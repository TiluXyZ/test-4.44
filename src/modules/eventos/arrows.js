import create from "../funciones/create"

const arrows = (direction, mediaQuery) => {
    modal.remove()

    const next = direction.nextElementSibling;

    const previous = direction.previousElementSibling;

    create('div', 'id', 'modal', 'modal', main)

    create('div', 'id', 'arrows', 'arrows', modal)

    const arrowsD = document.getElementById('arrows')

    create('div', 'id','header', 'header', modal)

    create('span', 'id','arrow', 'icon-arrow-left2', header)

    const imageElement = direction.firstElementChild;

    const imageValue = imageElement.getAttribute('src');

    create('img', 'src', imageValue, 'modal-img', modal)

    const titleE = imageElement.nextElementSibling

    let titleV = titleE.firstElementChild

    titleV = titleV.textContent

    create('span', 'id','modal-title', 'modal-title', modal)

    const titleModal = document.getElementById('modal-title');
    
    titleModal.textContent = titleV

    create('p', 'id','modal-text', 'modal-text', modal)

    const textModal = document.getElementById('modal-text')

    textModal.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt voluptatem aliquid eveniet praesentium natus, reiciendis cum tempore, dolore qui pariatur, aspernatur vero impedit non. Dolor quaerat eveniet fugiat sed.'

    const arrowIcon = header.firstElementChild

    arrowIcon.addEventListener('click', (e) => {
        main.remove()
    })    

    if (direction.getAttribute('class') == 'card-1 card'){
        create('div', 'id', 'arrow-r', 'arrow-right', arrowsD)

        const arrowR = document.getElementById('arrow-r')

        arrowR.classList.add('first')

        create('span', 'id', 'arrow-right', 'icon-chevron-right', arrowR)

        const arrowRight = document.getElementById('arrow-right')

        if (mediaQuery.matches){
            arrowRight.classList.replace('icon-chevron-right', 'arrow-r')
    
            arrowRight.textContent = 'Siguiente'
        }

        arrowRight.addEventListener('click', (e) =>{
            arrows(next, mediaQuery)
        })
    } else if (direction.getAttribute('class') == 'card-36 card'){
        create('div', 'id', 'arrow-l', 'arrow-left', arrowsD)

        const arrowL = document.getElementById('arrow-l')

        create('span', 'id', 'arrow-left', 'icon-chevron-left', arrowL)

        const arrowLeft = document.getElementById('arrow-left')

        if (mediaQuery.matches){
            arrowLeft.classList.replace('icon-chevron-left', 'arrow-l')
    
            arrowLeft.textContent = 'Anterior'
        }

        arrowLeft.addEventListener('click', (e) => {
            arrows(previous, mediaQuery)
        })
    } else {
        create('div', 'id', 'arrow-l', 'arrow-left', arrowsD)

        create('div', 'id', 'arrow-r', 'arrow-right', arrowsD)
        
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

        arrowRight.addEventListener('click', (e) =>{
            arrows(next, mediaQuery)
        })
    
        arrowLeft.addEventListener('click', (e) => {
            arrows(previous, mediaQuery)
        })
    }
}

export default arrows