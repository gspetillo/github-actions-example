function retornaEmCaixaAlta(texto) {
  const fs = require("fs");

  

  fs.writeFileSync("test.txt", texto.toUpperCase());

  
  return texto.toUpperCase();
}

module.exports = { retornaEmCaixaAlta };
