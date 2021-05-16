let name= prompt("Adınız?")
document.querySelector("#myName").innerHTML=name

function showTime(){
  const zaman = document.querySelector(".clock");

  const date = new Date();
  let currentDay;

  switch (true) {
    case date.getDay() === 1:
      currentDay = "Pazartesi";
      break;
    case date.getDay() === 2:
      currentDay = "Salı";
      break;
    case date.getDay() === 3:
      currentDay = "Çarşamba";

      break;
    case date.getDay() === 4:
      currentDay = "Perşembe";
      break;
    case date.getDay() === 5:
      currentDay = "Cuma";
      break;
    case date.getDay() === 6:
      currentDay = "Cumartesi";
      break;
    case date.getDay() === 0:
      currentDay = "Pazar";
      break;
    default:
      break;
  }
  let st = date.getHours();
  let dk = date.getMinutes();
  let sn = date.getSeconds();

  st = st < 10 ? `0${st}`: st;
  dk = dk < 10 ? `0${dk}`: dk;
  sn = sn < 10 ? `0${sn}`: sn;


  zaman1= `${st}:${dk}:${sn} ${currentDay}`;

  zaman.textContent = zaman1;


};

  setInterval(() => {
    showTime();
  }, 1000);

