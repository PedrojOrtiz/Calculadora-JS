function setNum(num) {
    document.getElementById("resultado").value = document.getElementById("resultado").value + num
}

function igual() {
    var exp = document.getElementById("resultado").value
    if (exp) {
        document.getElementById("resultado").value = eval(exp)    
    }
}

function limpiar() {
    document.getElementById("resultado").value = "" 
}

function borrar() {
    document.getElementById("resultado").value = document.getElementById("resultado").value.substring(0, document.getElementById("resultado").value.length -1)  
}

function raiz() {
    document.getElementById("resultado").value = Math.sqrt(document.getElementById("resultado").value)
}