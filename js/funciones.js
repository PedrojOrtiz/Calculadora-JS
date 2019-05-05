function saludar(saludo) {
    alert(saludo)
}

function suma() {
    var n1 = Number(document.getElementById("numero1").value)
    var n2 = Number(document.getElementById("numero2").value)
    var res = n1 + n2
    //alert(res)
    document.getElementById("resultado").value = res
}
function resta() {
    var n1 = Number(document.getElementById("numero1").value)
    var n2 = Number(document.getElementById("numero2").value )
    var res = n1 - n2
    //alert(res)
    document.getElementById("resultado").value = res
}
function multiplicacion() {
    var n1 = Number(document.getElementById("numero1").value)
    var n2 = Number(document.getElementById("numero2").value )
    var res = n1 * n2
    //alert(res)
    document.getElementById("resultado").value = res
}
function division() {
    var n1 = Number(document.getElementById("numero1").value)
    var n2 = Number(document.getElementById("numero2").value )
    var res = n1 / n2
    //alert(res)
    document.getElementById("resultado").value = res
}
//funcion eval()