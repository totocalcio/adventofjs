const setTime = () => {
  const time = document.getElementById("js-time");
  const setValue = document.getElementById("js-time__setValue");
  time.style.display = "none";
  setValue.style.display = "block";

  const minutes = document.getElementById("js-minutes").textContent;
  console.log(minutes);
  console.log(document.getElementById("js-setting__minutes"));
  document.getElementById("js-setting__minutes").value = 10;
};

document.getElementById("js-setting").addEventListener("click", setTime);
