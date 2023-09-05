const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function clock() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ap = "AM";

  if (hr > 12) {
    hr = hr - 12;
    ap = "PM";
  }
  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hours.innerText = hr;
  minutes.innerText = min;
  seconds.innerText = sec;
  ampm.innerText = ap;
  setTimeout(() => {
    clock();
  }, 1000);
}
clock();
