const frases = [
    "Primeira frase",
    "Segunda frase",
    "Terceira frase",
    "Quarta frase"
  ];
  
  const spanTexto = document.querySelector('.texto');
  let index = 0;
  
  function escreverTexto() {
    if (index < frases.length) {
      const fraseAtual = frases[index];
      const intervalo = 100; // Intervalo entre cada letra sendo adicionada
      
      for (let i = 0; i < fraseAtual.length; i++) {
        setTimeout(() => {
          spanTexto.textContent += fraseAtual[i];
        }, intervalo * i);
      }
      
      setTimeout(apagarTexto, intervalo * fraseAtual.length + 1000); // Tempo para aguardar antes de apagar o texto
      index++;
    } else {
      index = 0;
      escreverTexto();
    }
  }
  
  function apagarTexto() {
    const textoAtual = spanTexto.textContent;
    for (let i = textoAtual.length - 1; i >= 0; i--) {
      setTimeout(() => {
        spanTexto.textContent = textoAtual.slice(0, i);
      }, 100 * (textoAtual.length - i));
    }
    
    setTimeout(escreverTexto, 100 * textoAtual.length + 500); // Tempo para aguardar antes de escrever a próxima frase
  }
  
  escreverTexto();


  
  