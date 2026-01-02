let captchaCode = "";

function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  captchaCode = '';
  for (let i = 0; i < 6; i++) {
    captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const canvas = document.getElementById('captchaCanvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '30px Arial';
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.fillText(captchaCode, canvas.width / 2, 35);

  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }
}

function validateCaptcha() {
  const userInput = document.getElementById('userInput').value;
  const message = document.getElementById('resultMessage');

  if (userInput === captchaCode) {
    message.style.color = 'green';
    message.textContent = 'Captcha is passed successfully!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Captcha is incorrect. Try again!';
    generateCaptcha();
  }
}

window.onload = generateCaptcha;

