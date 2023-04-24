function somar(){
    var num1 = parseInt(document.getElementById('numero1').value)
    var num2 = parseInt(document.getElementById('numero2').value)
    var soma = num1 + num2
    document.getElementById('resultado').innerHTML = 'Soma = ' + soma
}