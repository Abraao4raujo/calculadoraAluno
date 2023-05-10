const limparDadosBtn = document.getElementById('limparDados')
const notaAv1 = document.getElementById('notaAv1Aluno')
const notaAv2 = document.getElementById('notaAv2Aluno')
const span = document.getElementById('span')
const clear = document.getElementById('limparDados')
// const enviarDadosBtn = document.getElementById('enviarDados')
// const spanrecup = document.getElementById('recuperacao')


function getDataAv1() {
  const notaAv1 = parseFloat(document.getElementById('notaAv1Aluno').value)
  const notaAv2 = parseFloat(document.getElementById('notaAv2Aluno').value)

  if (isNaN(notaAv1) && isNaN(notaAv2)) {
    span.innerHTML = ''
  }

  if (!isNaN(notaAv1) && isNaN(notaAv2)) {
    const resultado = (7 * 2) - notaAv1
    const final = 8 - notaAv1

    if (notaAv1 <= 3) {
      span.innerHTML = `VOCÊ NÃO TEM CONDIÇÕES DE PASSAR DIRETO.
    PARA IR A FINAL, VOCÊ PRECISA TIRAR NOTA IGUAL A ${final} NA SEGUNDA AVALIAÇÃO.`
      span.classList.add('reprovado')
      span.classList.remove('aprovado')
    } else {
      span.innerHTML = `VOCÊ PRECISA TIRAR ${resultado} PTS PARA SER APROVADO.`
      span.classList.remove('aprovado', 'reprovado')
    }
  } else if (!isNaN(notaAv1) && !isNaN(notaAv2)) {
    const somaNotas = (notaAv1 + notaAv2)
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

// function getData() {
//   const notaAv1 = parseFloat(document.getElementById('notaAv1Aluno').value)
//   const notaAv2 = parseFloat(document.getElementById('notaAv2Aluno').value)
//   const media = Number(notaAv1 + notaAv2) / 2
//   const aviso = document.getElementById('aviso')
//   // const resultado = document.getElementById('resultado')

//   if (media < 7) {
//     const precisaTirar = 10 - media
//     span.style.display = 'none'
//     span.innerHTML = `AVALIAÇÃO FINAL, SUA MEDIA FOI ${media}`
//     aviso.innerHTML = `Você precisa tirar ${precisaTirar}, na Avaliação Final, para ser aprovado.`
//   } else {
//     span.style.display = 'none'
//     span.innerHTML = `APROVADO, SUA MEDIA É ${media}`
//     aviso.style.display = 'none'
//   }
//   console.log(media)
// }

notaAv1.addEventListener('keyup', getDataAv1)
notaAv2.addEventListener('keyup', getDataAv1)
clear.addEventListener('click', () => {
  notaAv1.value = ''
  notaAv2.value = ''
  span.innerHTML = ''
})
// enviarDadosBtn.addEventListener('click', getData)