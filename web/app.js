function showAlert() {
  alert('What the f... this is an alert message!');
}

function changeColor() {
  var color = document.getElementById('inColor').value;
  document.getElementById('paragraph').style.color = color;
}

var myRectangleLeft = 0;

function moveLeft() {
  myRectangleLeft -= 10;
  document.getElementById('divRectangle').style.left = myRectangleLeft;
}

function moveRight() {
  myRectangleLeft += 10;
  document.getElementById('divRectangle').style.left = myRectangleLeft;
}
