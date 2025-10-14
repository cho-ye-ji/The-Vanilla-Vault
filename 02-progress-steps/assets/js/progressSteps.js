const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; //어떤 게 활성화 되는지

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
  //   console.log(currentActive);
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
  console.log(currentActive);
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  // TODO 이 부분 한 번 더 확인 1/3 - 2/3 - 3/3
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  console.log(actives.length, circles.length);
  console.log((actives.length / circles.length) * 100);

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  //   1차 작성
  //   else if (currentActive <= circles.length || currentActive > 1) {
  //     prev.disabled = false;
  //   }
}
