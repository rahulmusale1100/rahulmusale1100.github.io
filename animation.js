<div class="sun"></div>
<div class="planet"></div>

.sun {
  width: 100px;
  height: 100px;
  background-color: yellow;
  border-radius: 50%;
}

.planet {
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 25%;
}

let planet = document.querySelector('.planet');
let sun = document.querySelector('.sun');
let radius = 100;
let x = 0;
let y = 0;

setInterval(() => {
    x = radius * Math.cos(x) + sun.offsetLeft;
    y = radius * Math.sin(y) + sun.offsetTop;
    planet.style.left = x + 'px';
    planet.style.top = y + 'px';
}, 30);
