const express = require("express"); //IMPORTANTE O EXPRESS
const app = express(); //INICIANDO O EXPRESS E PASSANDO PARA VARIÁVEL APP

app.get("/", function (requisicao, resposta) {
  resposta.send("Bem vindo ao curso guia do programador");
});
app.get("/blog/:artigo?", function (requisicao, resposta) {
  var artigo = requisicao.params.artigo;
  if (artigo) {
    resposta.send("<h2>Artigo: " + artigo + "</h2>");
  } else {
    resposta.send(
      "<h3> Bem vindo ao meu blog!: www.guiadoprogramador.com</h3>"
    );
  }

  // resposta.send("Bem vindo ao meu blog!");
});
app.get("/canal/youtube", function (requisicao, resposta) {
  resposta.send("Bem vindo ao meu canal!");
});
app.get("/ola/:nome/:empresa", function (requisicao, resposta) {
  //REQUISICAO - REQ => SÃO OS DADOS ENVIADOS PELO USUÁRIO
  //RESPOSTA - RES => RESPOSTA QUE SERÁ ENVIADA PARA O USUÁRIO

  var nome = requisicao.params.nome;
  var empresa = requisicao.params.empresa;
  resposta.send("<h1> OI: " + nome + " da empresa " + empresa + " </h1>");
});
app.listen(4000, function (erro) {
  if (erro) {
    console.log("Aconteceu um erro");
  } else {
    console.log("Servidor iniciado com seucesso");
  }
});
