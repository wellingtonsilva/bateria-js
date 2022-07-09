document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase())
});

document.querySelector('.composer button').addEventListener('click', (event) => {
    let song = document.querySelector('#input').value;
    
    if(song !== '') {
       let songArray = Array.from(song);
       console.log(songArray)
       playComposition(songArray)
    }
});

const playComposition = (songArray) => {
    let wait = 0;
    for(let songItem of songArray) {

        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait = wait + 250
    }
}

const playSound = (sound) => {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');
        setTimeout(() =>{
            keyElement.classList.remove('active');
        }, 300)
    }
}