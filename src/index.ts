/**
 * [*] 1- Uma funcao que salva um objeto planet com as seguintes propriedades:
 * nome: inserido pelo usuário
 * coodernadas: inserido pelo usuário, salvo com uma tupla de quatro elementos numéricos
 * situacao: inserido pelo usuário, salvo com uma string que pode ser
 * "habitado", "habitável", "inabitável", "inexplorado"
 * satelites: uma lista com os seus nomes
 * [*] 2- Uma funcao que atualiza a situação de um determinado planeta
 * [*] 3- Uma funcao que adiciona um satelite a um determinado planeta
 * [*] 4- Uma funcao que remove um satelite de um determinado planeta
 * [*] 5- Uma funcao que lista os planetas salvos e todas as suas informações
 * 
 *   adendos
 * 
 * utiliza-lo no html
 * criar um array global para ser utilizado pelas funcoes
 * utilizar a tipagem a favor
 * criatividade
 * testar a funcao direto no console do navegador
 * utilizar as funcoes de entrada e saida do navegador como prompt, confirm e alert
 * para criar um menu interativo
 */

let planets = []

type situation = "habitado" | "habitável" | "inabitável" | "inexplorado"

function savePlanet(name:string, coordinates:[number, number, number, number], situation:situation, satelites:string[]) {
    let planet = {
        name,
        coordinates,
        situation,
        satelites
    }

    planets.push(planet)
    alert(`Planeta ${planet.name} foi salvo`)
}

function updateSituation(planetName:string) {
    let resultPlanet = searchPlanet(planetName)
    if(resultPlanet){
        resultPlanet.map(planet=>{
        let newSituation = Number(prompt('Por qual situação você deseja alterar? Escolha um número:\n1 - habitado\n2 - habitável\n3 - inabitável\n4 - inexplorado'))
            switch (newSituation) {
                case 1:
                    planet.situation = "habitado"
                    alert('Situação alterada com sucesso')
                    break;
                case 2:
                    planet.situation = "habitável"
                    alert('Situação alterada com sucesso')
                    break;
                case 3:
                    planet.situation = "inabitável"
                    alert('Situação alterada com sucesso')
                    break;
                case 4:
                    planet.situation = "inexplorado"
                    alert('Situação alterada com sucesso')
                    break;   
                default:
                    alert('Opção inválida')
                    break;
            }                                
        }) 
    }else{
        alert('Este planeta não existe')
    }
}

function addNewSatelite(sateliteName:string, planetName:string) {
    let resultPlanet = searchPlanet(planetName)
    if(resultPlanet){
        resultPlanet.map(planet=>{
            planet.satelites.push(sateliteName)
        })
        alert('Satelite adicionado')

    }else{
        alert('Este planeta não existe')
    }
}

function removeSatelite(planetName:string) {
    let resultPlanet = searchPlanet(planetName)
    if(resultPlanet){
        resultPlanet.map(planet=>{
            planet.satelites.pop()        
        })
        alert('Satelite removido com sucesso')
    }else{
        alert('Este planeta não existe')
    }
}

function listPlanets() {
    planets.map(planet=>{
        let name = planet.name
        let coordinates = planet.coordinates
        let situation = planet.situation
        let satelites = planet.satelites
        alert(`Nome: ${name}\nCoordenadas: ${coordinates}\nSituação: ${situation}\nSatelites: ${satelites}`)
    })
}

function searchPlanet(name:string) {
    let result = planets.map(planet=>{
        if(planet.name === name){
            return planet
        }else{
            alert(`O planet ${name} não existe`)
        }
    })

    return result
}

function menu() {
    return Number(prompt('Menu principal:\n1 - Salvar espaçonave\n2 - Atualizar situação de um planeta\n3 - Adicionar um satelite a um planeta\n4 - Remover um satelite de um planeta\n5 - Listar todos os planetas\n6 - Sair'))
}

let option = menu()

while(option != 6){
    switch (option) {
        case 1:
            let name = prompt('Nome do planeta')
            let coordinates = Number(prompt('Agora iremos escolher as coordenadas. Digite os números da coordenada 1'))
            let coordinates2 = Number(prompt('Coordenada 2'))
            let coordinates3 = Number(prompt('Coordenada 3'))
            let coordinates4 = Number(prompt('Coordenada 4'))
            let situation: situation
            let resultSituation = Number(prompt('Qual a situação dos planetas? Escolha um número.\n1 - habitado\n2 - habitável\n3 - inabitável\n4 - inexplorado'))

            switch (resultSituation) {
                case 1:
                    situation = "habitado"
                    break;
                case 2:
                    situation = "habitável"
                    break;
                case 3:
                    situation = "inabitável"
                    break;
                case 4:
                    situation = "inexplorado"
                    break;                
                default:
                    alert('opção inválida')
                    break;
            }

            let satelites = prompt('O nome do satelite deste planeta')
            savePlanet(name, [coordinates, coordinates2, coordinates3, coordinates4], situation, [satelites])
            break;
        case 2:
            let namePlanet = prompt('Qual o nome do planeta que você quer alterar a situação')
            updateSituation(namePlanet)
            break;
        case 3:
            let planetNameToAddSatelite = prompt('Qual o nome do planeta que você quer adicionar um satelite?')
            let nameSatelite = prompt('Qual o nome do satelite?')
            addNewSatelite(nameSatelite, planetNameToAddSatelite)
            break;
        case 4:
           let planetNameToRemoveSatelite = prompt('Em qual planeta você que remover um satelite')
            removeSatelite(planetNameToRemoveSatelite)
            break;
        case 5:
            listPlanets()
            break;
        default:
            alert('Opção inválida')
            break;
    }

    option = menu()
}

// savePlanet("mercurio", [2, 5, 6, 8], "habitado", ["falcon"])

 