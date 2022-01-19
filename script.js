const word_el=document.getElementById('word');
const popup= document.getElementById('popup-container');
const message_el=document.getElementById('success-message');
const wrongLetters_el=document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');

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

function updateWrongLetters() {
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length>0?'<h3>Hatalı harfler</h3>':''}
        ${wrongLetters.map(letter=> `<span>${letter}<span>`)}
    `;
    items.forEach((item,index) => {
        const errorCount = wrongLetters.length;

        if (index<errorCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

    
        }
    


// window.addEventListener('keydown',function(e){
//  if(e.keyCode>=32 && e.keyCode<=250){ //this range covers only the letters on the keyboard.
//   const letter=e.key;

//   if(selectedWord.includes(letter)){
//       if(!correctLetters.includes(letter)){
//           correctLetters.push(letter);

//           displayWord();
//       }
//   }
// }
// });

// displayWord()


window.addEventListener('keydown', function(e) {
    if (e.keyCode >= 65 && e.keyCode <= 290) {        
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                displayMessage('bu harfi eklemiştiniz.');
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            }
        
        }
    }
});

displayWord()