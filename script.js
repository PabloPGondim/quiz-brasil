var pontos = 0;

const Quiz = {
    fQuestion(){
        pontos = 0;
        document.body.innerHTML = '<div><h1 class="title-question">Quantas letras estão presentes na bandeira do Brasil?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.wrong()">13</button><button class="button-question" type="button" onclick="Quiz.wrong()">14</button><button class="button-question" type="button" onclick="Quiz.ok()">15</button><button class="button-question" type="button" onclick="Quiz.wrong()">16</button></div>'
        },
    ok(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion1()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
        
    },
    wrong(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion1()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
        
    },
    fQuestion1(){
        document.body.innerHTML = '<div><h1 class="title-question">O sorvete chegou em terras brasileiras no ano de...</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.wrong1()">1829</button><button class="button-question" type="button" onclick="Quiz.ok1()">1834</button><button class="button-question" type="button" onclick="Quiz.wrong1()">1857</button><button class="button-question" type="button" onclick="Quiz.wrong1()">1887</button></div>'
    },
    ok1(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion2()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
        
    },
    wrong1(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion2()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
    },
    fQuestion2(){
        document.body.innerHTML= '<div><h1 class="title-question">Quantas pizzas são produzidas por dia no Brasil?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.wrong2()">600Mil</button><button class="button-question" type="button" onclick="Quiz.wrong2()">800Mil</button><button class="button-question" type="button" onclick="Quiz.ok2()">1 Milhão</button><button class="button-question" type="button" onclick="Quiz.wrong2()">1,5 Milhão</button></div>'
    },
    ok2(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion3()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
        
    },
    wrong2(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion3()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
    },
    fQuestion3(){
        document.body.innerHTML= '<div><h1 class="title-question">Qual foi o nome masculino e qual foi o nome feminino mais registrado no Brasil em 2019?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.ok3()">Enzo Grabriel e Maria Eduarda</button><button class="button-question" type="button" onclick="Quiz.wrong3()">João Miguel e Maria Clara</button><button class="button-question" type="button" onclick="Quiz.wrong3()">Enzo Miguel e Maria Valentina</button><button class="button-question" type="button" onclick="Quiz.wrong3()">Pedro Henrique e Maria Luiza</button></div>'
    },
    ok3(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion4()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
        
    },
    wrong3(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion4()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
    },
    fQuestion4(){
        document.body.innerHTML ='<div><h1 class="title-question">No Brasil existem mais de 20 homens que se chamam Mulher.</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.ok4()">VERDADE</button><button class="button-question" type="button" onclick="Quiz.wrong4()">FALSO</button></div>'
    },
    ok4(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion5()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
        
    },
    wrong4(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion5()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
    },

    fQuestion5(){
        document.body.innerHTML ='<div><h1 class="title-question">Quantos capítulos teve a novela mais longa da TV brasileira?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.wrong5()">365</button><button class="button-question" type="button" onclick="Quiz.wrong5()">452</button><button class="button-question" type="button" onclick="Quiz.wrong5()">489</button><button class="button-question" type="button" onclick="Quiz.ok5()">596</button></div>'
    },


    ok5(){ 
        pontos++;
        document.body.innerHTML = '<h1 class="title-question hits">Parabéns, Você acertou!</h1><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion6()">Proxima pergunta</button></div></div> <h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
        
    },
    wrong5(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion6()">Proxima pergunta</button></div></div> <h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
    },

    fQuestion6(){
        document.body.innerHTML ='<div><h1 class="title-question">Apenas um destes estados brasileiros é menor que a França. Qual?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.wrong6()">Mato Grosso</button><button class="button-question" type="button" onclick="Quiz.ok6()">Bahia</button><button class="button-question" type="button" onclick="Quiz.wrong6()">Amazonas</button><button class="button-question" type="button" onclick="Quiz.wrong6()">Pará</button></div>'
    },


    ok6(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion7()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
        
    },
    wrong6(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion7()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
    },

    fQuestion7(){
        document.body.innerHTML ='<div><h1 class="title-question">Qual foi o emoji mais usado no Brasil em 2019?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.ok7()">Olhos de coração</button><button class="button-question" type="button" onclick="Quiz.wrong7()">Coração</button><button class="button-question" type="button" onclick="Quiz.wrong7()">Chorando de rir</button><button class="button-question" type="button" onclick="Quiz.wrong7()">Chorando</button></div>'
    },


    ok7(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion8()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
        
    },
    wrong7(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion8()">Proxima pergunta</button></div></div><div><h1 class="title-question">Total de acertos ' + pontos +' !</h1></div>'
    },

    fQuestion8(){
        document.body.innerHTML ='<div><h1 class="title-question">O dinheiro brasileiro é produzido em qual destas cidades?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.wrong8()">São Paulo</button><button class="button-question" type="button" onclick="Quiz.wrong8()">Brasilia</button><button class="button-question" type="button" onclick="Quiz.wrong8()">Curitiba</button><button class="button-question" type="button" onclick="Quiz.ok8()">Rio de Janeiro</button></div>'
    },

    ok8(){ 
        pontos++;
        document.body.innerHTML = '<div><h1 class="title-question hits">Parabéns, Você acertou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion9()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
        
    },
    wrong8(){
        document.body.innerHTML = '<div><h1 class="title-question mistakes">Que pena, Você errou!</h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion9()">Proxima pergunta</button></div></div><h1 class="title-question">Total de acertos ' + pontos +' !</h1>'
    },

    fQuestion9(){
        document.body.innerHTML ='<div><h1 class="title-question">Por fim, quais desses nomes de cachorros são mais populares no nosso país?</h1></div><div class="container"><button class="button-question" type="button" onclick="Quiz.wrong9()">Nina e Luke</button><button class="button-question" type="button" onclick="Quiz.wrong9()">Mel e Luke</button><button class="button-question" type="button" onclick="Quiz.wrong9()">Nina e Thor</button><button class="button-question" type="button" onclick="Quiz.ok9()">Mel e Thor</button></div>'
    },

    ok9(){ 
        pontos++;
        document.body.innerHTML = '<h1 class="title-question hits">Parabéns, Você acertou!</h1><div class="container"><div><button class="button-question" type="button" onclick="Quiz.resultado()">Ver Resultado</button></div></div>,<div><h1 class="see-result">Clique a cima para ver o resultado!</h1></div>'
        
    },
    wrong9(){
        document.body.innerHTML = '<h1 class="title-question mistakes">Que pena, Você errou!</h1><div class="container"><div><button class="button-question" type="button" onclick="Quiz.resultado()">Ver Resultado</button></div></div>,<div><h1 class="see-result">Clique a cima para ver o resultado!</h1></div>'
    },

    resultadoMedia(){
        if (pontos <= 4) {
            return 'ruim'
         } else if (pontos <=6) {
            return 'Medio'
         }
         else if (pontos <=9) {
            return 'Bom'
         }
         else {
            return 'Perfeito'
         }
    },

    resultado(){
        document.body.innerHTML ='<div><h1 class="title-question">Você Obteve ' + pontos + ' Pontos </h1></div><div class="container"><div><button class="button-question" type="button" onclick="Quiz.fQuestion()">Reiniciar Teste</button></div></div><div><h1 class="see-result">E seu resultado foi ' + Quiz.resultadoMedia() + ' !</h1></div>'
    
    },

}