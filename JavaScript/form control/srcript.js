const inputPassword = document.querySelector("#inputPassword4");

const password = () => {
  if (inputPassword.value.length < 8) {
    alert("La contraseña debe contener al menos 8 caracteres");
  }
  alert(`Contraseña: ${inputPassword.value}`);
};
