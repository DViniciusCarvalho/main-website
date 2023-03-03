const apresentation = document.getElementsByTagName('h1')[0];

const writeText = (text) => {
    let characters = text.innerHTML.split('');
    text.innerHTML = '';
    setTimeout(() => {     
        characters.forEach((element, i) => {
            setTimeout(() => text.innerHTML += element, 75 * i);
        });
    }, 1000)
    
}

writeText(apresentation);
