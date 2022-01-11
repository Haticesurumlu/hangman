const word_el=document.getElementById('word');
const popup= document.getElementById('popup-container');

const correctLetters = ['j','a','v','s','t'];
const wrongLetters = [];
function getRandomWord(){
    const words= ["Expecto Patronum","Expelliarmus","Accio","Piertotum Locomotor","Episkey","Oculus Reparo","Stupefy","Obliviate","Lumos","Crucio","Avada Kedavra"]
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

        }
}


displayWord()