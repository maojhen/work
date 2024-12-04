// 獎項清單
const prizes = [
    "腿",
    "腹肌",
    "胸肌",
    "有氧",
    "背肌"
  ];
  
  const startBtn = document.getElementById("startBtn");
  const winnerDiv = document.getElementById("winner");
  const slot = document.getElementById("slot1");
  
  // 開始抽獎按鈕點擊事件
  startBtn.addEventListener("click", function() {
    // 隨機選擇獎項
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomIndex];
  
    // 滾動動畫，模擬老虎機效果
    let interval = setInterval(() => {
      // 隨機選擇一個獎項來顯示
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      slot.textContent = randomPrize;
    }, 50); // 每 100 毫秒更新一次
  
    // 停止滾動，顯示最終獎項
    setTimeout(() => {
      clearInterval(interval);
      slot.textContent = prize; // 顯示選中的獎項
      winnerDiv.textContent = `恭喜你今天練${prize}`;
    }, 3000); // 3 秒後停下
  });
  