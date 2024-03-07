
let decodificado = document.getElementById('decodificado');
let texto = document.getElementById('textoescrito');
let cripproc

function criptografar(){
    cripproc = texto.value;
    cripproc = cripproc.toLowerCase();
    cripproc = cripproc.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    cripproc = cripproc.replaceAll('e','enter');
    cripproc = cripproc.replaceAll('i','imes');
    cripproc = cripproc.replaceAll('a','ai');
    cripproc = cripproc.replaceAll('o','ober');
    cripproc = cripproc.replaceAll('u','ufat');
    decodificado.innerHTML = cripproc;
    
}

function descriptografar(){
    cripproc = texto.value;
    cripproc = cripproc.toLowerCase();
    cripproc = cripproc.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    cripproc = cripproc.replaceAll('ufat','u');
    cripproc = cripproc.replaceAll('ai','a');
    cripproc = cripproc.replaceAll('imes','i');
    cripproc = cripproc.replaceAll('ober','o');
    cripproc = cripproc.replaceAll('enter','e');
    decodificado.innerHTML = cripproc;
}

function copiar(){
    window.navigator.clipboard.writeText(decodificado.textContent)
}