/*
var carrito = document.querySelector('#carrito');
var section = document.querySelector('#container');
carrito.addEventListener("click",()=>{
	if(window.getComputedStyle(section,"")['display'] === "none"){
   	section.style.display="block";
   	
   }else{
   	section.style.display="none";
   }
});
*/

function desplegar(){
	var element = document.querySelector("#container");
	//console.log(window.getComputedStyle(element,"")['display']);
   	if(window.getComputedStyle(element,"")['display'] === "none"){
	   	element.style.display="block";
	   	
	}else{
	   	element.style.display="none";
	}
   
}

// carrito de compras


var precio= 0;

function Carrito(form){
	var prod = form.nombre.value;//document.querySelector(".producto").value;
	var cant = form.cantidad.value;//parseInt(document.querySelector(".cantidad").value);
	var valor = form.precio.value;//parseInt(document.querySelector(".precio").value);

	precio += valor*cant;

	var izq = document.querySelector(".izquierda");
	var der = document.querySelector(".derecha");
	var total = document.querySelector(".total");

	var nuevoProducto = document.createElement("h3");
	var infoProducto = document.createTextNode(prod);

	nuevoProducto.appendChild(infoProducto);
	izq.appendChild(nuevoProducto);

	var cantidadProducto = document.createElement("h3");
	var infoCantidad = document.createTextNode(String(cant));

	cantidadProducto.appendChild(infoCantidad);
	der.appendChild(cantidadProducto);

	total.innerHTML = "$ "+String(precio);
	}