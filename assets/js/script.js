pintar = (element, color = 'green') => {
    element.style.backgroundColor = color
}

cambiarColorNegro = (event) => {
    event.target.style.backgroundColor = 'black'
}

divAzul = document.querySelector('#azul')
divAzul.addEventListener('click', cambiarColorNegro)

divRojo = document.querySelector('#rojo')
divRojo.addEventListener('click', cambiarColorNegro)

divVerde = document.querySelector('#verde')
divVerde.addEventListener('click', cambiarColorNegro)
divAmarillo = document.querySelector('#amarillo')
divAmarillo.addEventListener('click', cambiarColorNegro)

document.addEventListener('keydown', (event) => {
    keyDiv = document.getElementById('key')
    switch (event.key) {
        case 'a':
            keyDiv.style.backgroundColor = 'pink'
            break
        case 's':
            keyDiv.style.backgroundColor = 'orange'
            break
        case 'd':
            keyDiv.style.backgroundColor = 'lightblue'
            break
        case 'q':
            crearNuevoDiv('purple')
            break
        case 'w':
            crearNuevoDiv('gray')
            break
        case 'e':
            crearNuevoDiv('brown')
            break
    }
})

crearNuevoDiv = (color) => {
    nuevoDiv = document.createElement('div')
    nuevoDiv.className = 'color-box'
    nuevoDiv.style.backgroundColor = color
    document.body.appendChild(nuevoDiv)
}
