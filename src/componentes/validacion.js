function validaFormulario() {
    let jsIdentificacion = getTextInputById("identificacion");
    let jsNombres = getTextInputById("nombres");
    let jsApellidos = getTextInputById("apellidos");
    let jsTelefono = getTextInputById("telefono");
    let jsHabitacion = getTextInputById("habitacion");
    let jsRH = document.getElementById("factorRH").value;
    let jsfechaIngreso = document.getElementById("fechaIngreso").value;
    let jsfechaSalida = document.getElementById("fechaSalida").value;

    if (jsIdentificacion === "") {
        alert("ERROR: Favor de ingresar identificación");
        return false;
    } else if (jsNombres === "") {
        alert("ERROR: Favor de ingresar nombre(s)");
        return false;
    } else if (jsApellidos === "") {
        alert("ERROR: Favor de ingresar apellidos");
        return false;
    } else if (jsTelefono === "") {
        alert("ERROR: Favor de ingresar teléfono");
        return false;
    } else if (jsHabitacion === "") {
        alert("ERROR: Favor de ingresar habitación");
        return false;
    } else if (jsRH === "") {
        alert("ERROR: Favor de seleccionar tipo de sangre");
        return false;
    } else if (jsfechaIngreso === "") {
        alert("ERROR: Favor de ingresar fecha de ingreso");
        return false;
    } else if (jsfechaSalida === "") {
        alert("ERROR: Favor de ingresar fecha de salida");
        return false;
    }

    // Si todos los campos están completos, muestra el mensaje y limpia el formulario
    alert("Los datos se han guardado correctamente.");
    limpiarFormulario();
    return true;
}

// Recuperar valores de variables
let getTextInputById = (id) => {
    return document.getElementById(id).value.trim();
};

// Función para limpiar el formulario
let limpiarFormulario = () => {
    document.getElementById("identificacion").value = "";
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("habitacion").value = "";
    document.getElementById("factorRH").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("fechaSalida").value = "";
};

export default validaFormulario;
