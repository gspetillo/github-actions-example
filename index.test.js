const index = require("./index");
test("deveria retornar um texto em caixa alta", () => {
  const texto = "agora eu aprendo github actions";

  const result = index.retornaEmCaixaAlta(texto);
  expect(result).toEqual(texto.toUpperCase());
});
