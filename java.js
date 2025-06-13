let clickCount = 0;

const circles = document.getElementsByClassName('circ');
for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener('click', function () {
    if (clickCount % 2 === 0) {
      this.style.fill = "blue";
    } else {
      this.style.fill = "red";
    }
    clickCount++;
  });
}
