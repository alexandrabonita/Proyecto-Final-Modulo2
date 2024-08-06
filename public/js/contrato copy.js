const generoInput = document.getElementById('genero');
const nombresInput = document.getElementById('nombres');
const apellidosInput = document.getElementById('apellidos');
const domicilioForm = document.querySelector('.domicilio');
const domicilioCompletoElement = document.getElementById('domicilioCompleto');

/** 
 * OBSERVACIONES PENDIENTES
 * 1.- Manejo de errores: Agregar un manejo de errores más robusto, especialmente en
 *     la función calcularCodigoPostal. (que una vez defina la API se implementará)
 * */
// Caché DOM

 /** 2.- Optimizaciones:
 *     Cache DOM: Almacenar referencias a elementos del DOM que se utilizan con 
 *          frecuencia para evitar búsquedas repetidas.
 *     Delegación de eventos: Utiliza la delegación de eventos para adjuntar un solo 
 *          escuchador a un contenedor principal y evitar agregar escuchas a cada 
 *          elemento individualmente.
*/

function CalculaHoraFin(horaInicio) {
  // Convertir la hora de inicio a un objeto Date
        const fechaInicio = new Date();
        fechaInicio.setHours(horaInicio.split(":")[0]);
        fechaInicio.setMinutes(horaInicio.split(":")[1]);
  // Sumar 5 horas a la fecha de inicio
        fechaInicio.setHours(fechaInicio.getHours() + 5);
  // Formatear la nueva hora en formato HH:mm
        const horaFin = fechaInicio.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  // Asignar el valor al campo de texto
        document.getElementById('hora_fin').value = horaFin;
}
function actualizarGenero() {
    const genero = document.getElementById('genero').value;
    const generoCompleto = document.getElementById('generoCompleto');
    generoCompleto.textContent = genero;
  }
// Escuchar cambios en los campos del formulario
document.getElementById('genero').addEventListener('change', actualizarNombreCompleto);

function actualizarNombreCompleto() {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;

    const nombreCompleto = document.getElementById('nombreCompleto');
    nombreCompleto.textContent = `${nombres} ${apellidos}`;
}

// Escuchar cambios en los campos del formulario
document.getElementById('nombres').addEventListener('input', actualizarNombreCompleto);
document.getElementById('apellidos').addEventListener('input', actualizarNombreCompleto);

const formularioDomicilio = document.querySelector('.domicilio');
const domicilioCompleto = document.getElementById('domicilioCompleto');

formularioDomicilio.addEventListener('input', (event) => {
  const { name, value } = event.target;

  // Validación básica: al menos un campo debe tener valor
  if (value.trim() !== '') {
    const calle = document.getElementById('calle').value;
    const numeroExt = document.getElementById('numero_ext').value;
    const numeroInt = document.getElementById('numero_int').value;
    const colonia = document.getElementById('colonia').value;
    const colonia2 = document.getElementById('colonia2').value;
    const ciudad = document.getElementById('ciudad').value;
    const estado = document.getElementById('estado').value;
    const cp = document.getElementById('cp').value;
    /* INICIO cuando se tenga la API para obtener el C.P.
    // Obtener el código postal
        const cpInput = document.getElementById('cp');
        let cp = cpInput.value.trim();
    // Si el código postal está vacío, calcularlo
        if (!cp) {
            const calle = document.getElementById('calle').value;
            const colonia = document.getElementById('colonia').value;
            const colonia2 = document.getElementById('colonia2').value;
            const ciudad = document.getElementById('ciudad').value;
            const estado = document.getElementById('estado').value;
            cp = calcularCodigoPostal(calle, colonia, ciudad, estado);
        }
    FIN cuando se tenga la API para obtener el C.P.*/
        domicilioCompleto.textContent = `${calle} ${numeroExt} ${numeroInt ? `-${numeroInt}` : ''} ${colonia2}${colonia}, ${ciudad}, ${estado} ${cp}`;
  } else {
    // Si se borra un campo, limpiar el domicilio completo
    domicilioCompleto.textContent = '';
  }
});

  
  











  
  


