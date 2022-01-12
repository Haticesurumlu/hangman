const word_el=document.getElementById('word');
const popup= document.getElementById('popup-container');
const message_el=document.getElementById('success-message');

const correctLetters = ['j','a','v','s','t','e','p','k','y','c','r','u','i','o','L','m','n','x'];
const wrongLetters = [];
function getRandomWord(){
    const words= ["expecto patronum","expelliarmus","accio","piertotum locomotor","episkey","oculus reparo","stupefy","obliviate","lumos","crucio","avada kedavra"]
    return words[Math.floor(Math.random() * words.length)];
}


    function displayWord() {
        const selectedWord = getRandomWord();
    
        word_el.innerHTML = `
            ${selectedWord.split('').map(letter => `
                <div class="letter">
                    ${correctLetters.includes(letter) ?letter : ' '}
                </div>
            `).join('')}
        
        `;

        const w=word_el.innerText.replace(/\n/g, '');
        if (w===selectedWord){
        popup.style.display='flex';
        message_el.innerText="congratulations, you won !"

        }
}

window.addEventListener('keydown',function(e){
  if(e.keyCode>=65 && e.keyCode<=90){ //this range covers only the letters on the keyboard.
    console.log(e.key);
    console.log(e.keyCode);
}
});

displayWord()