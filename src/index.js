const button = document.querySelectorAll('.info')

const container = document.getElementById('container')

button.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const firstDiv = document.createElement('div')

        container.appendChild(firstDiv)

        firstDiv.setAttribute('id', 'main')
        firstDiv.classList.add('main')

        const main = document.getElementById('main')

        const secondDiv = document.createElement('div')

        main.appendChild(secondDiv)

        secondDiv.setAttribute('id', 'modal')
        secondDiv.classList.add('modal')

        const thirdDiv = document.createElement('div')

        modal.appendChild(thirdDiv)

        thirdDiv.setAttribute('id', 'header')

        const header = document.getElementById('header')

        const arrow = document.createElement('span')

        arrow.classList.add('icon-arrow-left2')

        header.appendChild(arrow)

        const card = e.path[3]

        const imgElement = card.firstElementChild

        const imgValue = imgElement.getAttribute('src')

        const img = document.createElement('img')

        img.setAttribute('src', imgValue)

        modal.appendChild(img)
        
        const titleElement = imgElement.nextElementSibling

        let titleValue = titleElement.firstElementChild

        titleValue = titleValue.textContent

        const title = document.createElement('span')

        title.setAttribute('id', 'test')
        title.classList.add('modal-title')

        title.textContent = titleValue

        modal.appendChild(title)

        const description = document.createElement('p')

        description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt voluptatem aliquid eveniet praesentium natus, reiciendis cum tempore, dolore qui pariatur, aspernatur vero impedit non. Dolor quaerat eveniet fugiat sed.'

        modal.appendChild(description)

        const arrowIcon = header.firstElementChild

        arrowIcon.addEventListener('click', () => {
            main.remove()
        })
    })
});


