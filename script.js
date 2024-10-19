document.addEventListener('DOMContentLoaded', function() {
    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const elementos2 = document.getElementById('lista2');
    const lista = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    cargarEventlisteners();

    function cargarEventlisteners() {
        elementos1.addEventListener('click', comprarElemento);
        elementos2.addEventListener('click', comprarElemento);
        carrito.addEventListener('click', eliminarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
        console.log("con éxito");
    }

    function comprarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.parentElement;
            leerDatosElemento(elemento);
            console.log("con éxito");
        }
    }

    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('a').getAttribute('data-id')
        };
        console.log("con éxito");

        insertarCarrito(infoElemento);
    }

    function insertarCarrito(elemento) {
        const row = document.createElement('tr');
        row.innerHTML =  ` 
            <td>
                <img src="${elemento.imagen}" width=100>
            </td>
            <td>
                ${elemento.titulo}
            </td>
            <td>
                ${elemento.precio}
            </td>
            <td>
                <a href="#" class="borrar" data-id="${elemento.id}">X</a>   
            </td>
        `;
        lista.appendChild(row);
    }

    function eliminarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove(); // Elimina el elemento <tr>
            const elementoid = e.target.getAttribute('data-id');
            console.log("Elemento con ID " + elementoid + " eliminado.");
        }
    }

    function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        return false;
    }
});
