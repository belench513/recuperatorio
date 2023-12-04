// Supongamos que 'data' contiene el objeto JSON que proporcionaste

// Acceder a la información del usuario
const usuario = data.resultados[0];

// Acceder a propiedades específicas
const nombreCompleto = usuario.nombre.título + ' ' + usuario.nombre.primero + ' ' + usuario.nombre.último;
const ciudad = usuario.ubicación.ciudad;
const correoElectronico = usuario['correo electrónico'];
const fechaNacimiento = new Date(usuario.dob.fecha);
const telefono = usuario.teléfono;
const imagenGrande = usuario.imagen.grande;

// Mostrar información en la consola
console.log('Nombre completo:', nombreCompleto);
console.log('Ciudad:', ciudad);
console.log('Correo electrónico:', correoElectronico);
console.log('Fecha de nacimiento:', fechaNacimiento.toLocaleDateString());
console.log('Teléfono:', telefono);
console.log('URL de imagen grande:', imagenGrande);

// Puedes utilizar esta información para mostrarla en tu página HTML, por ejemplo, actualizando elementos en el DOM.

document.addEventListener('DOMContentLoaded', () => {
    // Se ejecuta cuando el DOM ha sido completamente cargado

    // URL de la API
    const apiUrl = 'https://randomuser.me/api/';

    // Selecciona el contenedor donde se mostrará la información
    const profileContainer = document.querySelector('.profile');

    // Realiza la solicitud a la API usando fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Maneja los datos obtenidos de la API
            const usuario = data.results[0];

            // Construye el HTML con la información del usuario
            const profileHTML = 
            `
            <img src="Captura.PNG" alt="Foto de perfil">
            <div class="info">
            <h2>Nombre: <span>Belen Chiodini

            </span></h2>
            <p>Hoy vengo a hablarles de Api</p>
            <p>Que es una Api? </p>
            <p> Es un conjunto de reglas y protocolos que nos permiten que aplicaciones se comuniquen entre si</p>
            <p>Si no saben estoy usando una api de presentación</p>
        </div>
            `;

            // Inserta el HTML en el contenedor
            profileContainer.innerHTML = profileHTML;
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
});
