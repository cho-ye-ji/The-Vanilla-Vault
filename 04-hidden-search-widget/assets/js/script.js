// TODO
// btn을 클릭하면 search에 active추가
// input에 포커스 -> 버튼 다시 클릭하면 삭제 > 토글

const searchBox = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  input.focus(); // 초점 생기게
});
