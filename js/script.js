let notaNumero = 2
let listaNotas = document.querySelector('.lista-notas')

function adicionarNota() {
  notaNumero++
  let idNota = `Nota${notaNumero}`
  let nota = document.createElement('li')
  let input = document.createElement('input')
  let btn = document.createElement('button')

  btn.setAttribute('onclick', `removerNota(${idNota})`)

  input.setAttribute('class', 'input')
  input.setAttribute('type', 'number')
  input.setAttribute('placeholder', `Nota ${notaNumero}`)

  nota.setAttribute('id', `${idNota}`)
  nota.appendChild(input)

  listaNotas.appendChild(nota)
}

function removerNota() {
  if (notaNumero >= 1) {
    notaNumero--
  }
  let ultimoElemneto = listaNotas.lastChild
  listaNotas.removeChild(ultimoElemneto)
}

function soma(notas) {
  let soma = 0
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
  }
  console.log(`a soma foi ${soma}`)
  return soma
}

let resultado = document.getElementById('resultado')
let areaResultado = document.querySelector('.area-resultado')

function calculo() {
  let notasInputs = []
  let inputs = document.querySelectorAll('.input')

  $(inputs).each((i, element) => {
    if (element.value === '') {
      alert('Preencha os campos vazios')
      areaResultado.style.display = 'none'
    } else {
      notasInputs.push(element.value)
      // element.value = ''
      areaResultado.style.display = 'block'
    }
  })

  let notas = notasInputs.map(Number)
  let media = soma(notas) / notaNumero
  media = media.toFixed(2)
  resultado.innerHTML = media
}

$('#calcular-nota').click(calculo)
$('#adicionar-nota').click(adicionarNota)
