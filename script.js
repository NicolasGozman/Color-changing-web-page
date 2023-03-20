const boton = document.getElementById("cambiarColor");

function cambiarColorAleatorio() {
	const colorAleatorio = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = "#" + colorAleatorio;
}

boton.addEventListener("click", cambiarColorAleatorio);
