const word_el=document.getElementById('word');
const popup= document.getElementById('popup-container');
const message_el=document.getElementById('success-message');

const correctLetters = ['-'];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord(){
    const words= ["expecto-patronum","muhammed"]
    return words[Math.floor(Math.random() * words.length)];
}


// "expelliarmus","accio","piertotum-locomotor","episkey","oculus-reparo","stupefy","obliviate","lumos","crucio",

    function displayWord() {
       
    
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
 if(e.keyCode>=32 && e.keyCode<=250){ //this range covers only the letters on the keyboard.
  const letter=e.key;
console.log(e.key)
console.log(e.keyCode)
  if(selectedWord.includes(letter)){
      if(!correctLetters.includes(letter)){
          correctLetters.push(letter);

          displayWord();
      }
  }
}
});

displayWord()