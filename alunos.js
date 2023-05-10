const limparDadosBtn = document.getElementById('limparDados')
const notaAv1 = document.getElementById('notaAv1Aluno')
const notaAv2 = document.getElementById('notaAv2Aluno')
const span = document.getElementById('span')
const clear = document.getElementById('limparDados')

function getDataAv1() {
  const notaAv1s = parseFloat(document.getElementById('notaAv1Aluno').value)
  const notaAv2s = parseFloat(document.getElementById('notaAv2Aluno').value)

  if (notaAv1s > notaAv1.getAttribute('max')) {
    /* Caso seja, define o valor do atributo max */
    notaAv1.value = 1
  } else if (notaAv2s > notaAv2.getAttribute('max')) {
    notaAv2.value = 1
  }
  else {

    if (isNaN(notaAv1) && isNaN(notaAv2)) {
      span.innerHTML = ''
    }

    if (!isNaN(notaAv1s) && isNaN(notaAv2s)) {
      const resultado = (7 * 2) - notaAv1s
      const final = 8 - notaAv1s

      if (notaAv1s <= 3) {
        span.innerHTML = `VOCÊ NÃO TEM CONDIÇÕES DE PASSAR DIRETO.
    PARA IR A FINAL, VOCÊ PRECISA TIRAR NOTA IGUAL A ${final} NA SEGUNDA AVALIAÇÃO.`
        span.classList.add('reprovado')
        span.classList.remove('aprovado')
      } else {
        span.innerHTML = `VOCÊ PRECISA TIRAR ${resultado} PTS PARA SER APROVADO.`
        span.classList.remove('aprovado', 'reprovado')
      }
    } else if (!isNaN(notaAv1s) && !isNaN(notaAv2s)) {
      const somaNotas = (notaAv1s + notaAv2s)
      const mediaNotas = somaNotas / 2

      if (somaNotas >= 14) {
        span.innerHTML = `Parabéns! Você passou com uma média de ${mediaNotas}`
        span.classList.add('aprovado')
        span.classList.remove('reprovado')
      } else {
        span.innerHTML = `Infelizmente, você não passou. Sua média foi ${mediaNotas}.`
        span.classList.add('reprovado')
        span.classList.remove('aprovado')
      }
    }
  }
}

notaAv1.addEventListener('click', getDataAv1)
notaAv2.addEventListener('click', getDataAv1)
notaAv1.addEventListener('keyup', getDataAv1)
notaAv2.addEventListener('keyup', getDataAv1)
clear.addEventListener('click', () => {
  notaAv1.value = ''
  notaAv2.value = ''
  span.innerHTML = ''
})