// Kalp animasyonu
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = (16 + Math.random() * 20) + "px";
  document.querySelector('.kalpler').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);

// Müzik başlatma
document.getElementById("muzikBtn").addEventListener("click", function () {
  document.getElementById("muzik").play();
  this.style.display = "none"; // Butonu gizle
});
