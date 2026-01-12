const imageContainer = document.getElementById('lampada');
const buttonTurn = document.getElementById('primary-button');

console.log(imageContainer);
console.log(buttonTurn);

buttonTurn.addEventListener('click', handleTurnOffOrOn);

function handleTurnOffOrOn() {
  const isOff = imageContainer.src.includes('white_lamp.png');

  //Se la lampada è spenta
  if (isOff) {
    imageContainer.src = './img/yellow_lamp.png';
    buttonTurn.innerHTML = 'Spegni';
  }
  // Se la lampada è accesa
  else {
    imageContainer.src = './img/white_lamp.png';
    buttonTurn.innerHTML = 'Accendi';
  }
}
