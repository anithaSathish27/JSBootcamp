//get random color function
function getRandomColor() { //generate new rgb number everytime
    let color = (Math.floor(Math.random() * (255 - 10)) + 10);
    return `rgb(${color}, ${color}, ${color})`;
  }
//function for changing background color 
function changeColor() {
        document.body.style.backgroundColor  = getRandomColor();
}


