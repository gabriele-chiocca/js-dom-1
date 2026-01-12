const imageContainer = document.getElementById('lampada');
const buttonTurn = document.getElementById('primary-button');

console.log(imageContainer);
console.log(buttonTurn);

buttonTurn.addEventListener('click', handleTurnOffOrOn);

/*buttonTurn.innerHTML = 'Spento'; */

function handleTurnOffOrOn() {
  const isOff = imageContainer.src.includes('white_lamp.png');

  if (isOff) {
    imageContainer.src = './img/yellow_lamp.png';
    buttonTurn.innerHTML = 'Spegni';
  } else {
    imageContainer.src = './img/white_lamp.png';
    buttonTurn.innerHTML = 'Accendi';
  }
}
