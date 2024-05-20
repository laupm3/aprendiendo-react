//Vanilla JavaScript

//Recuperamos los botones

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    // Al hacer click en el botón, queremos ejecutar una función
    button.addEventListener('click', function () {

        //Recuperamos la id del atributo de HTML
        const id = button.getAttribute('data-id')

        //Llamar a un servicio para actualizar si me gusta

        //ToggleLike(id)

        button.classList.toggle('liked');

        button.innerText = button.classList.contains('liked') ? 'Quitar me gusta' : 'Me gusta';
    })
})

