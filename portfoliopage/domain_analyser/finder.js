// Referência às inputs de URL
const urlSd = document.getElementById('subUrl')
const urlDr = document.getElementById('diretUrl')

// Referência às inputs de arquivo .txt
const wordlistSd = document.getElementById('wordlist_subf')
const wordlistDrt = document.getElementById('wordlist_diretf')

// Referência aos botões de find
const findSd = document.getElementById('subf_find')
const findDrt = document.getElementById('diretf_find')

// Referência aos botões de limpeza de tela
const clearSd = document.getElementById('clearSub')
const clearDrt = document.getElementById('clearDiretf')

// Referência às telas de resultados
const subDisplay = document.getElementById('subf_pre')
const diretfDisplay = document.getAnimations('diretf_pre')

// Protocolos da URL
let http = 'http://'
let https = 'https://'
let finalUrl

// Limpa tela do buscador de subdominios 
clearSd.addEventListener('click', () => {
  subDisplay.innerHTML = ''
})

// Limpa tela do buscador de diretórios
clearDrt.addEventListener('click', () => {
  diretfDisplay.innerHTML = ''
})

// Inicia a busca de subdomínios
findSd.addEventListener('click', () => {
  if (wordlistSd.files.length == 0){
    alert('You must select an wordlist')
  }
  else {
    let url = urlSd.value
    let request = new XMLHttpRequest()
    let reader = new FileReader()
    reader.readAsText(wordlistSd.files[0])
    reader.onload = () => {
      let words = reader.result.split(' ')
      for (let word of words){
        try {
          finalUrl = buildUrlSub(url, word)
          if(finalUrl.includes('http://') || finalUrl.includes('https://')){
            request.open('GET', finalUrl,true)
            request.onreadystatechange=() => {
              if(request.status == 200){
                let subDomainFound = document.createElement('p')
                subDomainFound.innerText = finalUrl
                subDisplay.appendChild(subDomainFound)
              }
            }
            request.send()
          }
          else{
            throw new Error ('URL inválida')
          }
        }
        catch(error){
          if(error.message== 'URL inválida'){
            window.alert(error.message)
          }
        }
      }
    }
  }
})

// Concatena as partes da URL com subdominio
function buildUrlSub(url, word){
  if (url.includes('https://')){
    let domainhttps = url.splice(7)
    return 'https://' + word + domain
  }
  else if('http://'){
    let domainhttp = url.splice(6)
    return 'http://' + word + domainhttp
  }
  else {
    return url
  }
}

findDrt.addEventListener('click', () => {
  if (wordlistDrt.files.length == 0){
    alert('You must select an wordlist')
  }
  else{
    let url = urlDr.value
    let request = new XMLHttpRequest()
    let reader = new FileReader()
    reader.readAsText(wordlistDrt.files[0])
    reader.onload = () => {
      let words = reader.result.split(' ')
      for (let word of words){
        finalUrl = buildUrlDiret(url, word)
        request.open('GET', finalUrl,true)
        request.onreadystatechange=()=> {
          if(request.status == 200){
            let directoryFound = document.createElement('p')
            directoryFound.innerText = finalUrl
            diretfDisplay.appendChild(directoryFound)
          }
        }
        request.send()
      }
    }
  }
})

function buildUrlDiret(url, word){
  let lastCaractere = url[url.length-1]
  if (lastCaractere == '/'){
    return `${url}${word}/`
  }
  else {
    return `${url}/${word}/`
  }
}