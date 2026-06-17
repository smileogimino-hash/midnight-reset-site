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

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    screenDark.classList.add("is-active");
  } else {
    screenDark.classList.remove("is-active");
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

  /* opened表示 */
  curtainOpen.forEach((img) => {
    img.classList.add("is-show");
  });

  /* 2秒後 */
  setTimeout(() => {
    curtainOpen.forEach((img) => {
      img.classList.remove("is-show");
    });

    curtainClosing.forEach((img) => {
      img.classList.add("is-show");
    });

    /* 暗転開始 */
    screenDark.classList.add("is-active");
  }, 2000);

  /* さらに2秒後 */
  setTimeout(() => {
    curtainClosing.forEach((img) => {
      img.classList.remove("is-show");
    });

    curtainClosed.classList.add("is-show");
  }, 4000);
}

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
