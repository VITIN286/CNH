let idade = document.getElementById("idade")
let resultado = document.getElementById('msg')

document.querySelector('button').addEventListener('click', function(){
  if(idade.value >= 18){
    resultado.innerHTML = 'Parabens você foi aprovado(a)'
  }else {
    resultado.innerHTML = 'Infelizmente você ainda não tem idade suficiente para tirar a CNH em 2024'
  }
})