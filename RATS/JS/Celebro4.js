document.addEventListener("DOMContentLoaded", () => {

  const _links = document.querySelectorAll(".ativo");
  _links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = '#38e0dc';
    }
  });

  const _carrossel = document.querySelector('.carrossel_container');
  const _imagens = document.querySelectorAll('.carrossel_container img');
  const _anter = document.querySelector('.anter');
  const _prox = document.querySelector('.prox');

  let index = 0;

  function atualizarCarrossel() {
    _carrossel.style.transform = `translateX(${-index * 100}%)`;
  }

  if (_prox && _anter && _carrossel) {
    _prox.addEventListener('click', function() {
      index = (index + 1) % _imagens.length;
      atualizarCarrossel();
    });

    _anter.addEventListener('click', function() {
      index = (index - 1 + _imagens.length) % _imagens.length;
      atualizarCarrossel();
    });
  }

  const botao = document.querySelector("#botao");
  const menu = document.getElementById("menu");

    botao.addEventListener("click", function() {
      menu.classList.toggle("mostrar");
    });

        const palavras = ["cuidar.", "comunicar.", "prevenir."];
    let i = 0;
    const span = document.querySelector(".palavra");

    setInterval(() => {
      span.classList.add("oculto");
      setTimeout(() => {
        i = (i + 1) % palavras.length;
        span.textContent = palavras[i];
        span.classList.remove("oculto");
      }, 500);
    }, 2000);
});