const button = document.querySelectorAll('.info')

button.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const container = document.getElementById('container')

        const firstDiv = document.createElement('div')

        container.appendChild(firstDiv)

        firstDiv.setAttribute('id', 'main')
        firstDiv.classList.add('main')

        const main = document.getElementById('main')

        const card = e.path[3]

        const imgElement = card.firstElementChild

        const imgValue = imgElement.getAttribute('src')

        const img = document.createElement('img')

        img.setAttribute('src', imgValue)

        main.appendChild(img)
        
        const titleElement = imgElement.nextElementSibling

        let titleValue = titleElement.firstElementChild

        titleValue = titleValue.textContent

        const title = document.createElement('span')

        title.textContent = titleValue

        main.appendChild(title)

        const description = document.createElement('p')

        main.appendChild(description)
    })
});

