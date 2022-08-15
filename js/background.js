const images = [
  "bg0.jpg",
  "bg1.jpg",
  "bg2.jpg",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${choosenImage}`

document.body.appendChild(bgImg)