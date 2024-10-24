let alternativa = ''
let abrigo = []
function cabecalho() {
    console.log('===== ABRIGOS TEMPORÁRIOS =====')
    console.log('1. Cadastrar abrigo')
    console.log('2. Listar abrigos')
    console.log('3. Procurar abrigo')
    console.log('4. Sair')
    console.log('Escolha uma opção:')
    alternativa = Number(prompt('Escolha uma opção:'))
    console.log('-----------------------------------')

}



function SistemaAbrigo() {

    while (true) {
        cabecalho()
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

                break
            case 2:
                console.log('--------------------')
                console.log('LISTAGEM DE ABRIGOS:')
                console.log('--------------------')
                console.log(`CÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE`)
                console.log(`-----------------------------------------------------------`)
                if (abrigo.length > 0) {
                    for (let i = 0; i < abrigo.length; i++) {
                        console.log(`  ${[i + 1]}  |   ${abrigo[i].nome}   |   ${abrigo[i].endereco}   |  ${abrigo[i].telefone}   |   ${abrigo[i].capacidade}   |   ${abrigo[i].cidade}  `)
                        console.log(`----------------------------------------------------------`)

                    }
                } else {
                    console.log('Ainda nao há abrigos cadastrados! Tente novamente.')
                }

                break
            case 3:
                let solicitaCidade = prompt('Qual cidade você está?')
                let abrigoEncontrado = abrigo.filter(novoAbrigo => novoAbrigo.cidade === solicitaCidade)
                console.log('Qual cidade você está?')
                console.log(solicitaCidade)
                console.log('--------------------')
                console.log('LISTAGEM DE ABRIGOS:')
                console.log('--------------------')
                console.log(`CÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE`)
                console.log(`-----------------------------------------------------------`)
                if (abrigoEncontrado.length > 0) {
                    for (let i = 0; i < abrigoEncontrado.length; i++) {
                        console.log(`  ${[i + 1]}  |   ${abrigoEncontrado[i].nome}   |   ${abrigoEncontrado[i].endereco}   |  ${abrigoEncontrado[i].telefone}   |   ${abrigoEncontrado[i].capacidade}   |   ${abrigoEncontrado[i].cidade}  `)
                        console.log(`----------------------------------------------------------`)

                    }
                } else {
                    console.log('Não foi encontrado nenhum abrigo na sua cidade :(')
                }
                
                break
            case 4:
                console.log('Saindo...')
                return

            default:
                console.log('Opção inválida! Tente novamente.');
        }

    }
}
SistemaAbrigo()