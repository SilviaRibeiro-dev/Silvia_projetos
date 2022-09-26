function estacao() {
      let mes = prompt('Digite o mes(ex:setembro ou ex:9)')
    let saida = document.querySelector('section#saida')
    let estacao = mes
    switch (mes.toUpperCase()) {
        case 'DEZEMBRO':case '12': case 'JANEIRO': case'1': case 'FEVEREIRO':case'2':
            estacao = 'INVERNO'
            break
        case 'MARCO': case'3': case 'ABRIL': case'4': case 'MAIO': case'5':
        estacao = 'PRIMAVERA'
            break
        case 'JUNHO':case'6': case 'JULHO': case'7': case 'AGOSTO': case'8':
        estacao = 'VERAO'
             break
        case 'SETEMBRO': case'9': case 'OUTUBRO': case'10': case 'NOVEMBRO': case'11':
        estacao = 'OUTONO'
             break         
        default:
            estacao = 'INDEFINIDA'
            break
    }     
    
  
    saida.innerHTML = `<p>No mes de <mark>${mes}</mark>, estamos na estacao <mark><strong>${estacao}</strong><mark/>.</p>`
 }