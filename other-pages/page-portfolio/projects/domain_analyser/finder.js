const urlSd = document.getElementById('subUrl');
const urlDr = document.getElementById('diretUrl');
const wordlistSd = document.getElementById('wordlist_subf');
const wordlistDrt = document.getElementById('wordlist_diretf');
const findSd = document.getElementById('subf_find');
const findDrt = document.getElementById('diretf_find');
const clearSd = document.getElementById('clearSub');
const clearDrt = document.getElementById('clearDiretf');
const subDisplay = document.getElementById('subf_pre');
const diretfDisplay = document.getAnimations('diretf_pre');

let http = 'http://';
let https = 'https://';
let finalUrl;

function isValidURL(){
  return finalUrl.includes('http://') || finalUrl.includes('https://')?
    true : false
}

function buildURLSub(url, word){
  if (url.includes('https://')){
    let domainhttps = url.splice(7);
    return 'https://' + word + domainhttps;
  }
  else if('http://'){
    let domainhttp = url.splice(6)
    return 'http://' + word + domainhttp;
  }
  else {
    return url;
  }
}

function findSubdomain (fullWordList) {
  let request = new XMLHttpRequest()
  let url = urlSd.value
  console.log(fullWordList)
  let words = fullWordList.split('\n')
  for (let word of words) {
    console.log(word)
    try {
      finalUrl = buildURLSub(url, word)
      if (isValidURL()) {
        request.open('GET', finalUrl, true);
        request.onreadystatechange = () => {
          if (request.status == 200) {
            let subDomainFound = document.createElement('p');
            subDomainFound.innerText = finalUrl;
            subDisplay.appendChild(subDomainFound);
          }
        }
        request.send();
      }
    }
    catch (error) {
      continue;
    }
  }
  
}

function buildURLDiret (url, word) {
  let lastCaractere = url[url.length-1]
  if (lastCaractere == '/'){
    return `${url}${word}/`
  }
  else {
    return `${url}/${word}/`
  }
}

function findDirectory (fullWordList) {
  let request = new XMLHttpRequest()
  let url = urlDr.value
  let words = fullWordList.split('\n')
  for (let word of words) {
    console.log(word)
    finalUrl = buildURLDiret(url, word)
    request.open('GET', finalUrl, true)
    request.onreadystatechange = () => {
      if (request.status == 200) {
        let directoryFound = document.createElement('p')
        directoryFound.innerText = finalUrl
        diretfDisplay.appendChild(directoryFound)
      }
    }
    request.send()
  }
}

async function readWordlist (identifier){
  let reader = new FileReader();
  if (identifier === 'subdomain'){
    reader.readAsText(wordlistSd.files[0])
    reader.addEventListener('load', findSubdomain(reader.result))
  }
  else {
    reader.readAsText(wordlistDrt.files[0])
    reader.addEventListener('load', findDirectory(reader.result))
  }
}

// Limpa tela do buscador de subdominios 
clearSd.addEventListener('click', () => {
  subDisplay.innerHTML = '';
})

// Limpa tela do buscador de diretórios
clearDrt.addEventListener('click', () => {
  diretfDisplay.innerHTML = '';
})

// Inicia a busca de subdomínios
findSd.addEventListener('click', () => {
  wordlistSd.files.length !== 0? readWordlist('subdomain') : alert('You must select an wordlist')
})

findDrt.addEventListener('click', () => {
  wordlistDrt.files.length !== 0? readWordlist('directory') : alert('You must select an wordlist')
})



