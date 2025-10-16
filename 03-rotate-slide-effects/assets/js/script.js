const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const container = document.querySelector(".container");

// 메뉴 버튼(오픈)을 누르면
// .container에 show-nav가 생성 되면서 open button이 사라지고 close 버튼이 나타난다.
// close 버튼을 누르면
// show-nav가 사라지면서 close button이 사라지고 open 버튼이 나타난다.

openButton.addEventListener("click", () => container.classList.add("show-nav"));
closeButton.addEventListener("click", () =>
  container.classList.remove("show-nav")
);
