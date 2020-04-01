// Teste automatizado de retorno da API
describe("Busca dados api", function() {

  it("deve listar os dados de personagens", function() {
    var busca = new BuscaDadoApi();
    expect(busca.buscaDados()).toEqual("success");
  });

});
