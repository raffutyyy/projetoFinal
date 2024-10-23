let alternativa = ''
function cabecalho() {
    console.log('===== ABRIGOS TEMPORÁRIOS =====')
    console.log('1. Cadastrar abrigo')
    console.log('2. Listar abrigos')
    console.log('3. Procurar abrigo')
    console.log('4. Sair')
    console.log('Escolha uma opção:')
    alternativa = Number(prompt('Escolha uma opção:'))

   
    

}
cabecalho()


function SistemaAbrigo() {
    let abrigo = []
    let totalAbrigo = [abrigo]
    switch (alternativa) {
        case 1:
            let nome = prompt('Nome do abrigo:')
            let endereco = prompt('Endereço do abrigo:')
            let telefone = Number(prompt('Telefone para contato:'))
            let capacidade = Number(prompt('Capacidade de lotação:'))
            let cidade = prompt('Cidade do abrigo:')

            let dadosAbrigo = {
                nome: nome,
                endereco: endereco,
                telefone: telefone,
                capacidade: capacidade,
                cidade: cidade

            }
            abrigo.push(dadosAbrigo)
            console.log("===== Abrigo cadastrado com sucesso! =====")
            console.log(abrigo) // tirar também
            break
        case 2:
            console.log('--------------------')
            console.log('LISTAGEM DE ABRIGOS:')
            console.log('--------------------')
            if (totalAbrigo >= 1) {
                for (let listaAbrigo = 0; listaAbrigo > abrigo.length; listaAbrigo++) {
                    console.log(`  ${abrigo[0]} | ${abrigo[1]}      | ${abrigo[2]}     |  ${abrigo[3]}  |     ${abrigo[4]} | ${abrigo[5]}`)

                }
            } else{
                console.log('Ainda nao há abrigos cadastrados! Tente novamente.')
            }

            break
        case 3:


            break
        case 4:
                console.log('Saindo...')
              
            break

    }
    cabecalho()

}

SistemaAbrigo()

