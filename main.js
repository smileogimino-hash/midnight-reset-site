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

/* =========================
   カーテン
========================= */
const message = document.querySelector(".message");

const screenDark = document.querySelector(".screen-dark");

const curtainOpen = document.querySelectorAll(".curtain-open");
const curtainClosing = document.querySelectorAll(".curtain-closing");
const curtainClosed = document.querySelector(".curtain-closed");

let hasStartedCurtain = false;

/* =========================
   カーテン開始
========================= */
function startCurtainSequence() {
  if (hasStartedCurtain) return;

  hasStartedCurtain = true;

  /* 眠り演出 */
  page.classList.add("is-sleeping");

  /* =========================
     ① opened表示
  ========================= */

  curtainOpen.forEach((img) => {
    img.classList.add("is-show");
  });

  /* =========================
     ② 1秒後 closingへ
  ========================= */

  setTimeout(() => {
    curtainOpen.forEach((img) => {
      img.classList.remove("is-show");
    });

    curtainClosing.forEach((img) => {
      img.classList.add("is-show");
    });
  }, 1000);

  /* =========================
     ③ さらに1秒後 closedへ
  ========================= */

  setTimeout(() => {
    curtainClosing.forEach((img) => {
      img.classList.remove("is-show");
    });

    curtainClosed.classList.add("is-show");
  }, 2000);

  /* =========================
     ④ さらに1秒後closed後に暗転
  ========================= */

  setTimeout(() => {
    screenDark.classList.add("is-active");
  }, 3000);
}

/* =========================
   ぼかし開始(意識が遠のく感じ)
========================= */
const page = document.querySelector(".page");

/* =========================
   message監視
========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      /* 数秒待つ */
      setTimeout(() => {
        startCurtainSequence();
      }, 3000);
    }
  });
});

observer.observe(message);
