console.log('===== ABRIGOS TEMPORÁRIOS =====')
console.log('1. Cadastrar abrigo')
console.log('2. Listar abrigos')
console.log('3. Procurar abrigo')
console.log('4. Sair')
console.log('Escolha uma opção:')


function SistemaAbrigo() {
    let alternativa = Number(prompt('Escolha uma opção:'))
    let abrigo = []

    switch (alternativa) {
        case 1:
            let nome = prompt('Nome do abrigo:')
            let endereco = prompt('Endereço do abrigo:')
            let telefone = Number(prompt('Telefone para contato:'))
            let capacidade = Number(prompt('Capacidade de lotação:'))

            let dadosAbrigo = {
                nome: nome,
                endereco: endereco,
                telefone: telefone,
                capacidade: capacidade

            }
            abrigo.push(dadosAbrigo)
            console.log("Abrigo cadastrado com sucesso!") // tirar dps , feito apenas para analisar 
            console.log(abrigo) // tirar também



            break
        case 2:

            break
        case 3:

            break
        case 4:

            break

    }

}
SistemaAbrigo()
