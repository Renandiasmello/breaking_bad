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

	//Buscado dados da API
	$.ajax({
		url: "https://www.breakingbadapi.com/api/characters",
		type: "GET",
		beforeSend: function( xhr ) {
			$("#app").append('<h5>Loading...</h5>');
		}
	})
	.done(function( dados ) {
		$("#app").html('');
		// Varrendo dados retornados da API e montando modal dos personagens fazendo append nos htmls
		dados.forEach(dado => {
			$("#app").append(`
			<div class="col-md-6 col-lg-4 filtro">
				<h6>${dado.char_id} - ${dado.name.toUpperCase()}</h6>
				<div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${dado.char_id}">
					<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
					  <div class="portfolio-item-caption-content text-center text-white">
						  <i class="fas fa-plus fa-3x"></i>
					  </div>
					</div>
					<img src="${dado.img}" class="img-fluid char_img">
				</div>
			</div>`);


			$("#app").append(`
			<div class="portfolio-modal modal fade" id="portfolioModal${dado.char_id}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal${dado.char_id}Label" aria-hidden="true">
			  <div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
				  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">
					  <i class="fas fa-times"></i>
					</span>
				  </button>
				  <div class="modal-body text-center">
					<div class="container">
					  <div class="row justify-content-center">
						<div class="col-lg-8">
						  <!-- Personagem Modal - Title -->
						  <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${dado.nickname}</h2>
						  <!-- Icon Divider -->
						  <div class="divider-custom">
							<div class="divider-custom-line"></div>
							<div class="divider-custom-icon">
							  <i class="fas fa-star"></i>
							</div>
							<div class="divider-custom-line"></div>
						  </div>
						  <!-- Personagem Modal - Image -->
						  <img class="img-fluid rounded mb-5 char_img" src="${dado.img}" alt="${dado.name}">
						  <!-- Personagem Modal - Text -->
						  <p class="mb-5 text-justify" style="padding-left: 60px"><b>Nome: </b>${dado.name}<br>
										  <b>Anivers&aacute;rio: </b>${dado.birthday}<br>
										  <b>Ocupa&ccedil;&atilde;o: </b>${dado.occupation.join(', ')}<br>
										  <b>Temporadas: </b>${dado.appearance.join(', ')}<br>
										  <b>Status: </b>${dado.status}</p>
						  <button class="btn btn-primary" href="#" data-dismiss="modal">
							<i class="fas fa-times fa-fw"></i>
							Fechar
						  </button>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>`);
		});
	});
});
