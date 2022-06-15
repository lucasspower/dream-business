function initMenuMobile() {
  const btnMenu = document.querySelector(".menu-hambuguer");
  const menuCabecalho = document.querySelector(".menu-cabecalho");
  const header = document.querySelector(".cabecalho-header");

  btnMenu.addEventListener("click", handleClickMenu);
  function handleClickMenu(e) {
    this.classList.toggle("active");
    this.classList.toggle("fa-bars-staggered");
    this.classList.toggle("fa-bars");
    menuCabecalho.classList.toggle("active");
    header.classList.toggle("active");
  }
}
initMenuMobile();

// SCROLL
window.addEventListener("scroll", handleScrollNumbers);
const containerNumeros = document.querySelector(".numeros");
function handleScrollNumbers(e) {
  const numerosAll = containerNumeros.querySelectorAll("p span");
  let viewScroll =
    containerNumeros.getBoundingClientRect().top - window.innerHeight * 0.6;
  if (viewScroll <= 0) {
    animaNumeros(numerosAll);
    // containerNumeros.classList.add("animaNumbers");
    window.removeEventListener("scroll", handleScrollNumbers);
  }
}
function animaNumeros(numeros) {
  // const numeros = document.querySelectorAll('[data-num-projeto]');
  numeros.forEach((n) => {
    const valorN = +n.innerText;
    n.innerText = 0;

    const multiplicador = Math.floor(valorN / 20 + 1);
    let acc = 0;
    const intervalTimer = setInterval(() => {
      n.innerText = acc;
      acc += multiplicador;
      if (acc > valorN) {
        n.innerText = valorN;
        clearInterval(intervalTimer);
      }
    }, 200);
  });
}

function initAnimaNumerosProjeto() {
  const numeros = document.querySelectorAll("[data-num-projeto]");
  numeros.forEach((n) => {
    const valorN = +n.innerText;
    const multiplicador = Math.floor(valorN / 20 + 1);
    let acc = 0;
    const intervalTimer = setInterval(() => {
      n.innerText = acc;
      acc += multiplicador;
      if (acc > valorN) {
        n.innerText = valorN;
        clearInterval(intervalTimer);
      }
    }, 300);
  });
}
initAnimaNumerosProjeto();
