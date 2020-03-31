describe("BuscaDadoApi", function() {

  it("deve poder listar os dados de personagens", function() {
    let busca = new BuscaDadoApi();
    let dados = busca.buscaDados();    

    expect(dados);
    
  });

});
