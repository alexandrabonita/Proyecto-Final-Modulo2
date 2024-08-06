// Caché DOM
const generoInput = document.getElementById('genero');
const nombresInput = document.getElementById('nombres');
const apellidosInput = document.getElementById('apellidos');
const domicilioForm = document.querySelector('.domicilio');
const domicilioCompletoElement = document.getElementById('domicilioCompleto');
const horaFinInput = document.getElementById('hora_fin');


// Función auxiliar para actualizar el valor de un elemento del DOM
function actualizarCampo(elemento, valor) {
    elemento.textContent = valor;
}

/*
function actualizarGenero() {
    const genero = document.getElementById('genero').value;
    const generoCompleto = document.getElementById('generoCompleto');
    generoCompleto.textContent = genero;
  }
// Escuchar cambios en los campos del formulario
document.getElementById('genero').addEventListener('change', actualizarNombreCompleto);


*/


// Calcula la hora de fin sumando 5 horas a la hora de inicio
function CalculaHoraFin(horaInicio) {
    //1.- Convertir la hora de inicio a un objeto Date
          const fechaInicio = new Date();
          fechaInicio.setHours(horaInicio.split(":")[0]);
          fechaInicio.setMinutes(horaInicio.split(":")[1]);
    //2.- Sumar 5 horas a la fecha de inicio
          fechaInicio.setHours(fechaInicio.getHours() + 5);
    //3.- Formatear la nueva hora en formato HH:mm
          const horaFin = fechaInicio.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    //4.- Asignar el valor al campo de texto
          document.getElementById('hora_fin').value = horaFin;
}


// Actualiza el género en el contrato 1
function actualizarGenero() {
  const generoSelect = document.getElementById('genero');
  const generoValor = generoSelect.value;
  const generoCompleto = generoValor === 'C.' ? 'C.' : (generoValor === 'el señor' ? 'El señor' : 'La señora');
  const generoElement = document.getElementById('generoActualizado');
  actualizarCampo(generoElement, generoCompleto);
}
// Escuchador de eventos para el select de género
const generoSelect = document.getElementById('genero'); 
generoSelect.addEventListener('change', actualizarGenero);

function actualizarNombreCompleto() {
  const nombres = document.getElementById('nombres').value;
  const apellidos = document.getElementById('apellidos').value;

  const nombreCompleto = document.getElementById('nombreCompleto');
  nombreCompleto.textContent = `${nombres} ${apellidos}`;
  
}

// Escuchar cambios en los campos del formulario
document.getElementById('nombres').addEventListener('input', actualizarNombreCompleto);
document.getElementById('apellidos').addEventListener('input', actualizarNombreCompleto);

// Escuchadores de eventos
generoInput.addEventListener('change', actualizarGenero);
nombresInput.addEventListener('input', actualizarNombreCompleto);
apellidosInput.addEventListener('input', actualizarNombreCompleto);





// Función para actualizar el domicilio completo
function actualizarDomicilioCompleto() {
  const calle = document.getElementById('calle').value;
  const numeroExt = document.getElementById('numero_ext').value;
  const numeroInt = document.getElementById('numero_int').value;
  const colonia = document.getElementById('colonia').value;
  const ciudad = document.getElementById('ciudad').value;
  const estado = document.getElementById('estado').value;
  const cp = document.getElementById('cp').value;

  const domicilioCompleto = `${calle} No. ${numeroExt}, ${numeroInt} ${colonia}, ${ciudad}, ${estado}, C.P. ${cp}`;
  actualizarCampo(domicilioCompletoElement, domicilioCompleto);
}
// Función para calcular el costo total
function calcularCostoTotal() {
  
  /**
   * lógica para calcular el costo total basado en la fecha y el tipo de evento 
   * let costoTotal;
   * si la fecha es entre lunes y jueves entonces costoTotal=$precio_lj
   *    const costoTotalElement = document.getElementById('precio_lj');
   * else costoTotal=precio_vd
   *    const costoTotalElement = document.getElementById('precio_vd');
   */
  //en lo que se resuelve el algorito anterior se fijará un costo
   const costoTotalElement = document.getElementById('precio_vd'); 
   let costoTotal=costoTotalElement; 
   actualizarCampo(costoTotalElement, costoTotal);
}

// Función para actualizar otros campos del contrato
function actualizarContrato() {
  
  
}


// Llamar a las funciones de actualización al cargar la página o cuando los datos cambien
actualizarDomicilioCompleto();
actualizarNombreCompleto();
calcularCostoTotal();
actualizarContrato();