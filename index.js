function retornaEmCaixaAlta(texto) {
  const fs = require("fs");



  fs.writeFileSync("tes.txt", texto.toUpperCase());

  
  return texto.toUpperCase();
}

module.exports = { retornaEmCaixaAlta };
