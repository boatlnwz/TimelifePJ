const birth = new Date("2006-10-29T00:00:00");
const death = new Date("2081-10-29T00:00:00");
const lifespan = death - birth;

function updateClock() {
  const now = new Date();
  const lived = now - birth;
  const percent = lived / lifespan;

  const secondsInDay = 86400;
  const secondsPassed = percent * secondsInDay;
  const totalMilliseconds = secondsPassed * 1000;

  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor(totalMilliseconds % 1000);

  // เข็มนาฬิกา
  const hourDeg = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;
  const subSecondDeg = (milliseconds / 1000) * 360;

  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("subsecond").style.transform = `rotate(${subSecondDeg}deg)`;

  // นาฬิกาดิจิตอล
  const pad = (n, digits = 2) => n.toString().padStart(digits, '0');
  const digitalText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
  document.getElementById("digital").textContent = digitalText;

  document.getElementById("lifeBar").style.width = (percent * 100).toFixed(4) + "%";

  document.getElementById("percentText").textContent = `${(percent * 100).toFixed(6)}%`;

}

setInterval(updateClock, 10); // อัปเดตทุก 10ms
