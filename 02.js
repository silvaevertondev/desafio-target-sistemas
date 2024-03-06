function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    }
  
    let anterior = 0;
    let atual = 1;
  
    for (let i = 2; i <= n; i++) {
      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
    }
  
    return atual;
  }
  
  function pertenceFibonacci(numero) {
    for (let i = 0; i <= numero; i++) {
      const fibonacciAtual = fibonacci(i);
      if (numero === fibonacciAtual) {
        return true;
      }
    }
  
    return false;
  }
 
  const numero = parseInt(prompt("Digite um número: "));

  const pertence = pertenceFibonacci(numero);

  if (pertence) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
  
