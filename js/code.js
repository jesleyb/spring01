/*
 * Click en el boton Encriptar
 */
function encriptar() {
	var txtEntrada = document.getElementById('txtEntrada');
	var texto = txtEntrada.value.toLowerCase().trim();
	if(!texto.length) {
		limpiar();
	} else if(especiales(texto)) {
		alert('Solo se permiten letras minúsculas y sin acentos');
	} else {
		document.getElementById('txtEncrip').value = encrip(texto);		
		txtEntrada.value = '';
		document.getElementById('id-result-vacio').style.display = 'none';
		document.getElementById('id-result-decrip').style.display = 'none';
		document.getElementById('id-result-encrip').style.display = 'block';
	}
}

/*
 * Click en el boton Desencriptar
 */
function desencriptar() {
	var txtEntrada = document.getElementById('txtEntrada');
	const texto = txtEntrada.value.trim();
	if(!texto.length) {
		limpiar();
	} else if(especiales(texto)) {
		alert('Solo se permiten letras minúsculas y sin acentos');
	} else {
		document.getElementById('txtDecrip').value = decrip(texto.toLowerCase());		
		txtEntrada.value = '';
		document.getElementById('id-result-vacio').style.display = 'none';
		document.getElementById('id-result-encrip').style.display = 'none';
		document.getElementById('id-result-decrip').style.display = 'block';
	}
}

/*
 * Click en el boton Copiar - Copia el texto encriptado al portapapeles
 */
function copiar() {
	var txtEncript = document.getElementById('txtEncrip');
	txtEncript.focus();
	txtEncript.select();
	document.execCommand('copy');
	/* only https 
		navigator.clipboard.writeText(txtEncript.value);
	*/
}

/*
 * Click en el boton Limpiar - limpia todas las cajas de texto y deja como al principio
 */
function limpiar() {	
	document.getElementById('id-result-encrip').style.display = 'none';
	document.getElementById('id-result-decrip').style.display = 'none';
	document.getElementById('id-result-vacio').style.display = 'block';
	
	document.getElementById('txtEncrip').value = '';
	document.getElementById('txtDecrip').value = '';
	
	var txtEntrada = document.getElementById('txtEntrada');
	txtEntrada.value = '';
	txtEntrada.focus();
}

/*
 * Funcion regresa true si hay un caracter en un texto que
 * contenga un caracter aparte de minusculas a-z y espacio en blanco.
 * Ojo, el mensaje secreto termina en signo de exclamacion (caracter especial).
 */
function especiales(texto) {
	if(texto.match(/[^a-z\- ]/)){
		return true;    
	} else {
		return false;
	}
}

/*
 * Funcion que realiza el proceso de encriptar texto
 */
function encrip(texto) {
	var resultado = '';
	var tam = texto.length;
	for (var pos = 0; pos < tam; pos++) {
		var caracter = texto.charAt(pos);
		switch(caracter) {
			case 'e':
				resultado += 'enter';
				break;
			case 'i':
				resultado += 'imes';
				break;
			case 'a':
				resultado += 'ai';
				break;
			case 'o':
				resultado += 'ober';
				break;
			case 'u':
				resultado += 'ufat';
				break;
			default:
				resultado += caracter;
		}
	}
	return resultado;
}

/*
 * Funcion divide la cadena de texto por una cadena a buscar 
 * y las une nuevamente por la cadena reemplazar,
 * devolviendo una sola cadena
 */
function replaceAll(texto, buscar, reemplazar) {
  return texto.split(buscar).join(reemplazar);
}

/*
 * Funcion que realiza el proceso de desencriptar texto
 */
function decrip(texto) {
	var buscar = ['enter', 'imes', 'ai', 'ober', 'ufat'];
	var reemplazar = ['e', 'i', 'a', 'o', 'u'];
	
	for(var pos=0; pos<buscar.length; pos++) {
		texto = replaceAll(texto, buscar[pos], reemplazar[pos]);
	}
	return texto;
}