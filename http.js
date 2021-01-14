//HTTP É O PROTOCOLO DE TRANSFERÊNCIA DE DADOS NA WEB, SO CONSEGUR SE COMUNICAR COM O PROTOCOLO
//EXEMPLO, VIA HTTP SE MANDA UMA REQUISIÇÃO DE PESQUISA PARA O GOOGLE
// REQUISIÇÃO E RESPOSTA - REQUISIÇÃO E REPOSTA


var http = require("http"); //CARREGANDO O MÓDULO HTTP DO NODE NA VARIÁVEL - JÁ VEM NO NODE

http.createServer(function(requisicao, resposta){
resposta.end("<h1>Bem vindo ao meu site!</h1><br><h4>guiadoprogramador.com.br</h4>");
}).listen(9090);
console.log("Meu servidor está rodando!");