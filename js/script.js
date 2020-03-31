$(document).ready(function(){

// Limpar o conteudo da busca
$('.clear').on("click", function () {
	$('#busca').val('');
	let filtro = $('#busca').val().toUpperCase();
	$(".filtro").show().not(":contains('" + filtro + "')").hide();
	$('#personagens').click();
});

// Filtro da busca dos personagens
$('#busca').on("keyup", function () {
	$('#personagens').click();
	let filtro = $('#busca').val().toUpperCase();
	$(".filtro").show().not(":contains('" + filtro + "')").hide();
});

});