document.addEventListener('DOMContentLoaded', iniciarPagina);
function iniciarPagina(){
	//alert("Hola")


document.querySelector("#btn_agregar").addEventListener("click", agregar);
document.querySelector("#btn_reset").addEventListener("click",reset);
document.querySelector("#borrar_ultimo").addEventListener("click",borrarUltimo);
document.querySelector("#btn_sortear").addEventListener("click",sortear);

//modelo de datos

let nombres = [];

function agregar(){
	let input = document.querySelector("#nombre");
	let nombre = input.value;
	//agrego un elemento al arreglo
	nombres.push(nombre);

	// muestro el arrelo
	mostrar();

	// vaciar el input
	input.value = "";
	
}


function mostrar(){
	let lista = document.querySelector(".listado");
	lista.innerHTML = "";

	
	for(let elementoActual of nombres){
		//lista.innerHTML += `${elementoActual}`
		lista.innerHTML +=   	elementoActual + " "; 
	}

	
}

function reset(){
	//vaciar el arreglo
	nombres = [];
	mostrar();	
}

function borrarUltimo(){
	nombres.pop();
	mostrar();
}

function sortear(){
	let random = Math.floor(Math.random() * nombres.length);

	document.querySelector("#result").innerHTML = nombres[random];

 
 }


}

