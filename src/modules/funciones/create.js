const create = (elemento, attribute, a, clase, parent) => {
    
    const element = document.createElement(elemento)

    parent.appendChild(element)

    element.setAttribute(attribute, a)

    element.classList.add(clase)
}

export default create

