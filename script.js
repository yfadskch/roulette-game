const wheel = document.getElementById('roulette-wheel');
const result = document.getElementById('result');
const spinButton = document.getElementById('spin-button');
let isSpinning = false;

spinButton.addEventListener('click', () => {
  if (isSpinning) return;
  isSpinning = true;

  const randomAngle = Math.floor(Math.random() * 360);

  wheel.style.transition = 'transform 4s ease-out';
  wheel.style.transform = `rotate(${3600 + randomAngle}deg)`;

  setTimeout(() => {
    isSpinning = false;
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(${randomAngle}deg)`;

    const resultColor = randomAngle % 90 < 45 ? '红色' : '黑色'; 
    result.textContent = `结果是：${resultColor}！`;
  }, 4000);
});
