const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const memeContainer = document.getElementById('memeContainer');

let fontSize = 20;

const memes = [
  "https://i.imgflip.com/4/5z4i.jpg",
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.imgflip.com/1bij.jpg",
  "https://i.kym-cdn.com/photos/images/facebook/001/506/947/8d7.jpg",
  "https://i.redd.it/v0caqchbtn741.jpg",
  "https://i.kym-cdn.com/entries/icons/original/000/031/015/cover4.jpg",
  "https://media.tenor.com/yheo1GGu3FwAAAAC/rick-roll-rick-ashley.gif"
];

noBtn.addEventListener('click', () => {
  fontSize += 10;
  yesBtn.style.fontSize = `${fontSize}px`;

  const memeUrl = memes[Math.floor(Math.random() * memes.length)];

  const img = document.createElement('img');
  img.src = memeUrl;
  img.style.maxWidth = "300px";
  img.style.margin = "10px";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

  memeContainer.appendChild(img);
});

yesBtn.addEventListener('click', () => {
  alert("Yay! I love you 😍");
});
