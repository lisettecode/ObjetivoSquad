function calcular()
{
	var puntosSquad = document.getElementById("PuntoSquad").value;
	var maxPuntos = document.getElementById("PuntajeMaximo").value;
	//(100 * PuntoSquad) / PuntajeMaximo
	var porcentajeSquad = (100 * puntosSquad) / maxPuntos;

	if(porcentajeSquad >= 80)
	{
		document.getElementById("salida").innerHTML = "Muy bien squad!";
	}else{
		document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
	}
}
