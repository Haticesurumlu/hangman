const word_el=document.getElementById('words');
const popup= document.getElementById('popup-container');
const message_el=document.getElementById('success-message');
const wrongLetters_el=document.getElementById('wrong-letters');

const correctLetters = ['-'];
const wrongLetters = [];
const selectedWord = getRandomWord();


function getRandomWord(){
    const words= ["expecto-patronum","expelliarmus","accio","piertotum-locomotor","episkey","oculus-reparo","stupefy","obliviate","lumos","crucio","avada-kedavra"];
    return words[Math.floor(Math.random() * words.length)];
}


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
wrongLetters_el.innerHTML= `
${wrongLetters.length>0 ? <h3></h3> : ''}
${wrongLetters.map(letter=>'<span> ${letter} </span>')}

`;
}

window.addEventListener('keydown',function(e){
 if(e.keyCode>=32 && e.keyCode<=250){ //this range covers only the letters on the keyboard.
  const letter=e.key;
// console.log(e.key)
// console.log(e.keyCode)


  if(selectedWord.includes(letter)){
      if(!correctLetters.includes(letter)){
          correctLetters.push(letter);
           displayWord();
      } else{
          console.log("Bu harfi girmiştiniz.");
      } }else {
          if(!wrongLetters.includes(letter)){
              wrongLetters.push(letter);
              updateWrongLetters();
          
      }}
  }

}
});

displayWord()