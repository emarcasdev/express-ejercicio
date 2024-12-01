$(document).ready(function () {
    // URL del server Express
    const api_url1 = 'http://localhost:5000/users';
    const api_url2 = 'http://localhost:5000/users/user1/';
    const api_url3 = 'http://localhost:5000/users/';

    // Evento al hacer clic en el boton de mostrar todos los usuarios
    $('.bt-1').on('click', function () {
        $('.contenedor-cartas').empty();
        // Hecemos una petición AJAX
        $.ajax({
            url: api_url1,
            method: 'GET',
            success: function (users) {
                console.log('Usuario obtenido:', users);
                // Invocamos a la función de añadir todas cartas de los users
                users.forEach(user => {
                    addCard(user, `user${user.id}`)
                });
            },
            error: function (error){
                console.error('Error al obtener el usuario:', error);
            }
        });
    });

    // Evento al hacer clic en el boton de mostrar 1 user
    $('.bt-2').on('click', function () {
        $('.contenedor-cartas').empty();
        // Hecemos una petición AJAX
        $.ajax({
            url: api_url2,
            method: 'GET',
            success: function (user) {
                console.log('Usuario obtenido:', user);
                // Invocamos a la función de añadir carta
                addCard(user);
            },
            error: function (error){
                console.error('Error al obtener el usuario:', error);
            }
        });
    });

    // Evento al hacer clic en el boton de mostrar el usuario segun el id
    $('.bt-3').on('click', function () {
        $('.contenedor-cartas').empty();
        let id = $('.busqueda input').val();
        // Hecemos una petición AJAX
        $.ajax({
            url: api_url3 + id,
            method: 'GET',
            success: function (user) {
                console.log('Usuario obtenido:', user);
                // Invocamos a la función de añadir carta segun el id
                addCard(user);
            },
            error: function (error){
                console.error('Error al obtener el usuario:', error);
            }
        });
    });

    // Funcion para crear y añadir la carta
    function addCard(user) {
        const cardUser = 
        `<div class="carta" data-id={user.id}>
            <div class="carta-encabezado">
                <img src="images/icon.png" alt="Profile Image">
            </div>
            <div class="carta-cuerpo">
                <h2>Nombre: ${user.nombre}</h2>
                <p>Apellidos: ${user.apellido}</p>
                <p>Teléfono: ${user.tlfn}</p>
            </div>
        </div>`
        // Agregamos la carta al contendor
        $('.contenedor-cartas').append(cardUser);
    }
});