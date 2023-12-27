// ? grab the DOM elements
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

// ?anul se modifica dinamic
const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear 
+1 } 00:00:00`);

// ?setare anul din background sa se updateze dinamic --set background year
year.innerText = currentYear +1;

function updateCountdown(){
  const currentTime = new Date();
  // ?timpul va fi afisat in milisecunde in consola=> trebuie convertit
  const difference = newYearTime - currentTime;
  //* console.log(difference);

  // ?convertire din milisecunde - in zile
  const diffDays = Math.floor(difference / 1000 / 60 / 60 /24);
  //* console.log(diffDays);

  // ? cate ore sunt pana la anul nou
  const diffHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  //* console.log(diffHours);

  // ?cate minute au mai ramas pana la anul nou
  const diffMinutes =  Math.floor(difference / 1000 / 60) % 60;
  //* console.log(diffMinutes);

  // ?cate secunde au mai ramas pana la anul nou
    const diffSeconds =  Math.floor(difference / 1000) % 60;
  //*  console.log(diffseconds);


  // ? afisare pe ecran timp ramas pana la anul nou
  // ?Add values to DOM
  days.innerHTML = diffDays;
  hours.innerHTML = diffHours < 10 ? '0' + diffHours : diffHours;

  minutes.innerHTML = diffMinutes < 10 ? '0' + diffMinutes : diffMinutes;

  seconds.innerHTML = diffSeconds < 10 ? '0' + diffSeconds : diffSeconds;

}

// ? afisare loading la refresh -- Show spinner on page load
// ? setTimeout -- face sa apara doar la refresh giful de load
setTimeout(()=> {
  // ?am scos gif-ul de loading  cu metoda remove
  loading.remove();

  // ?am stilizat numaratoarea direct din js
  // ?in css -> am setat display: none la countdown
  countdown.style.display = 'flex';
}, 1000);

// ? update numaratoare la fiecare secunda (1000milisecunde = 1sec) --> cu setInterval --Run every second
setInterval(updateCountdown, 1000);






