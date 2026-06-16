const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

const suggestionButtons = document.querySelectorAll(".suggestion-btn");

const darkSwitch = document.getElementById("darkSwitch");

/* =========================
   モーダル開く
========================= */

suggestionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("is-open");
  });
});

/* =========================
   モーダル閉じる
========================= */

modalClose.addEventListener("click", () => {
  modal.classList.remove("is-open");

  document.body.classList.remove("is-dark");

  darkSwitch.checked = false;
});

/* =========================
   暗転スイッチ
========================= */

darkSwitch.addEventListener("change", () => {
  if (darkSwitch.checked) {
    document.body.classList.add("is-dark");
  } else {
    document.body.classList.remove("is-dark");
  }
});
