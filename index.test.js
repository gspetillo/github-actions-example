const index = require("./index");
test("deveria retornar um texto em caixa alta", () => {
  const texto = "agora eu aprendo github actions";

  const result = index.retornaEmCaixaAlta(texto);

  expect(result).toEqual(texto.toUpperCase());
});
test("deveria escrever um texto em caixa alta no test.txt", () => {
  const fs = require("fs");
  const texto = "será que escreveu?";

  index.retornaEmCaixaAlta(texto);

  fs.readFileSync("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    expect(data).toEqual(texto.toUpperCase());
  });
});
