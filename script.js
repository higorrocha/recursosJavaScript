//Os métodos indexOf() e lastIndexOf()

var exemplo = "Java";
//criando a variável e alimentando com o texto desejado.
var posicaoInicio = exemplo.indexOf("a");
//o resultado será o retorno da posição da primeira letra "a" na variável exemplo.
var posicaoFinal = exemplo.lastIndexOf("a");
//fará o retorno da posição da primeira letra "a" analisada de trás para frente.
var posicaoBusca = exemplo.indexOf("a", 1);
//retornará a posição da primeira letra "a" existente após a posição 1 na variável.

/*
//O método split()

var exemplo = "Marlene Prado";
//criando a variável e alimentando com o texto desejado.
var resultado = exemplo.split("");
//fará a divisão da string em caracteres isolados e armazenará em um array.
var resultado2 = exemplo.split(" ");
//fará a divisão da string usando como configuração o espaço em branco.
var resultado3 = exemplo.split(" ", 1);
/*O método recebe dois argumentos - o segundo sendo opcional. 
No primeiro argumento é passado a configuração para fazer a divisaão da string,
em segundo se faz a definição da quantidade de substrings que podem ser
retornadas no array. O que retornaria o array com a palavra "Marlene". */

/*
//O método substring()

var exemplo = "JavaScript é show!";
//criando a variável e alimentando com o texto desejado.
var resultado = exemplo.substring(0, 10);
/*O método substring recebe dois argumentos que determinarão 
a posição inicial e final da substring que deseja selecionar - sendo que
o segundo argumento é opcional.
Nesse caso ela inicia a seleção na letra "J" e finaliza na letra "t",
retornando a nova string "JavaScript". */

/*
// *Operador de igualdade e desigualdade*

var primeira = '1' == 1;
//compara a igualdade do valor da variável sem levar em consideração o seu tipo.
var segunda = '2' === 2;
//compara a igualdade do valor e o tipo da variável.
var terceira = '3' != 3;
//compara a desigualdade do valor da variável sem levar em consideração o seu tipo.
var quarta = '4' !== 4;
//compara a desigualdade do valor e o tipo da variável.
*/
