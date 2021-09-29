 function entradaValor() {
     var gasolina = parseFloat(document.getElementById('valorGasolina').value)


     var alcool = parseFloat(document.getElementById('valorAlcool').value)

     return alcool / gasolina

 }

 function calcular() {
     var calc = entradaValor()
     var imgFundo = document.getElementById('respostaimg')
     var txtResultado = document.getElementById('txtResposta')
     if (calc > 0.7) {
         imgFundo.className = 'imagemDeFundo2'
         txtResultado.innerText = 'Gasolina'
     } else {
         imgFundo.className = 'imagemDeFundo1'
         txtResultado.innerText = 'Alcool'
     }
 }