function funcionarTela(tipo, valor) {

    if(tipo == 'numero' ){

        window.document.getElementById('tela').value += valor
        
    } else if(tipo == 'operacao') {

        window.document.getElementById('tela').value += valor

    } else if(tipo == 'resultado' ) {

    var  resultado = window.document.getElementById('tela').value
    var resultado = eval(resultado)
    console.log(resultado)
    window.document.getElementById('tela').value = resultado

    }
}