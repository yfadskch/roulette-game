// 获取DOM元素
const wheel = document.getElementById('roulette-wheel');
const result = document.getElementById('result');
const spinButton = document.getElementById('spin-button');

let isSpinning = false; // 防止重复旋转

// 轮盘数据：数字和颜色对应
const rouletteData = [
  { number: 0, color: 'green' },
  { number: 1, color: 'red' },
  { number: 2, color: 'black' },
  { number: 3, color: 'red' },
  { number: 4, color: 'black' },
  { number: 5, color: 'red' },
  { number: 6, color: 'black' },
  // ... 继续填写 0-36
];

// 绑定旋转事件
spinButton.addEventListener('click', () => {
  if (isSpinning) return;
  isSpinning = true;

  // 随机生成一个旋转角度
  const randomAngle = Math.floor(Math.random() * 360);

  // 设置旋转动画
  wheel.style.transition = 'transform 4s ease-out';
  wheel.style.transform = `rotate(${3600 + randomAngle}deg)`;

  // 计算旋转结果
  setTimeout(() => {
    isSpinning = false;
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(${randomAngle}deg)`;

    // 根据角度计算结果
    const resultIndex = Math.floor((randomAngle / 360) * rouletteData.length) % rouletteData.length;
    const resultData = rouletteData[resultIndex];

    result.textContent = `结果是：数字 ${resultData.number} (${resultData.color})！`;
  }, 4000);
});
