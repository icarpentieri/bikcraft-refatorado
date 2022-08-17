const botao = document.querySelector('#botao-mode')
const body = document.querySelector('body')

botao.onclick = () => {
  botao.classList.toggle('ativar')
  body.classList.toggle('ativar')
}
