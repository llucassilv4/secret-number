// refazer os botoes criados para melhor fixar os conteudos
let listaDeNumerosSorteados = []
let numeroSecreto = numeroAleatorio()
let numeroDeTentativas = 1 // responsavel por acompanhar o número de vezes que o jogador tentou
console.log(numeroSecreto)

// 3 funcoes aprendidas ate o momento

// funcao 1, funcao com retorno que me devolve um numero aleatorio
function numeroAleatorio() {
    // tudo foi feito apenas aqui
    let numeroSorteado = parseInt(Math.random()*4+1)
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        // tecnica chamada de recursão, quando um método chama ele mesmo outra vez
        return numeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroSorteado)
        console.log(listaDeNumerosSorteados)
        return numeroSorteado
    }
}
// funcao 2, alterar valores em elementos html usando o document.querySeletor()
function geraTextoEmTela(tag,texto) {
    vcampo = document.querySelector(tag)
    vcampo.innerHTML = texto
        if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR'; 
            utterance.rate = 1.2; 
            window.speechSynthesis.speak(utterance); 
        } else {
            console.log("Web Speech API não suportada neste navegador.");
        }
    }

function resetaTextoEmTela() {
    geraTextoEmTela('h1','Bem vindo ao jogo do número secreto')
    geraTextoEmTela('p','chute um valor entre 0 e 10')
}
// chamando funcao no ato da execução do script
resetaTextoEmTela()

function limparCampo() {
    chute = document.querySelector('input').value = ''    
}

// funcao 3, responsavel pelo comportamento do botao CHUTE
function acaoBotaoChute() {
    let chute = document.querySelector('input').value
    let singularPluralTentativas = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa'
    let fraseVitoriosa = `você acaba de vencer o jogo acertanto o numero secreto ${numeroSecreto} com ${numeroDeTentativas} ${singularPluralTentativas}`
    // notas de melhora, incluir uma frase de erro
    let maiorOuMenorque = chute > numeroSecreto ? 'Maior' : 'Menor';
    let mensagemDeErro = `${chute} é ${maiorOuMenorque} que o número secreto`

    if(chute == numeroSecreto){
        geraTextoEmTela('h1','parabens!! você venceu o jogo')
        geraTextoEmTela('p', fraseVitoriosa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        limparCampo()
        if(chute > numeroSecreto){
            geraTextoEmTela('p',mensagemDeErro)
        } else {
            geraTextoEmTela('p',mensagemDeErro)
        }
    }
    numeroDeTentativas++
    //limparCampo();
}
function botaoNovoJogo() {
    numeroDeTentativas = 1
    numeroSecreto = numeroAleatorio()
    resetaTextoEmTela()
    //limpar campo de input
    //campoPesquisa = document.querySelector('input').value = ''
    limparCampo()
    console.log(numeroSecreto)
    // aplicar disabled de duas formas, segunda é foi aprendida pelo curso
    // document.getElementById('reiniciar').disabled = true
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

// lista de números sorteados serão armazenados em variável e não poderão ser resorteados