let listaPalabras = []

function agregarTexto() {
    let input = document.querySelector("#input");
    let inputValue = input.value
    listaPalabras.push(inputValue)
    input.value = ""      
}

function mostrar() {
 console.log(listaPalabras);
}