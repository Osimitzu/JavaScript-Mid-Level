/* INCOMPLETO */

const nombre = document.getElementById("nombre").value;
const mail = document.getElementById("mail").value;
const materia = document.getElementById("materia").value;
const boton = document.getElementById("btn-enviar");
const result = document.querySelector(".result");

const validarCampos = () => {
  let err = [];
  if (nombre.length < 5) {
    err[0] = true;
    err[1] = "El error no puede contener menos de 5 caracteres";
    return err;
  } else if (nombre.length > 40) {
    err[0] = true;
    err[1] = "El error no puede contener mas de 40 caracteres";
    return err;
  }
};

boton.addEventListener("click", (e) => {
  e.preventDefault();
  let err = validarCampos();
  if (err[0]) {
    result.innerHTML = err[1];
    result.classList.add("red");
  } else {
    result.innerHTML = "Solicitud enviada correctamente";
    result.classList.add("green");
  }
});
