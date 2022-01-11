const word_el=document.getElementById('word');

function getRandomWord(){
    const words= ["Expecto Patronum","Expelliarmus","Accio","Piertotum Locomotor","Episkey","Oculus Reparo","Stupefy","Obliviate","Lumos","Crucio","Avada Kedavra"]
    return words[Math.floor(Math.random() * words.length)];
}