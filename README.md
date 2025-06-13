# DT1
Delta Task 1

Used xmlns="http://www.w3.org/2000/svg"
Helps in better controlling of css in svg using JS

Learned hover function
.circ:hover{
    fill: rgb(85, 85, 85);
    stroke: white;
    stroke-width: 4px;
}


The part just below, lets all the circles load first and then add the event function to them
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.getElementsByClassName('circ');

  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', function () {
      this.style.fill = "blue"; // ← this will override the CSS
      
    });
  }
});

What actually happening is that this addlistener event
gets preattached to every circle even before we start to click

Now the i%2==0 mechanism wont actually work coz; in the beginning only all the circle gets a predefined i