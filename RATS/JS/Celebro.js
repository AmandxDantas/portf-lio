document.addEventListener("DOMContentLoaded", () => {

  const _links = document.querySelectorAll(".ativo");
  _links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = '#38e0dc';
    }
  });


  const botao = document.querySelector("#botao");
  const menu = document.getElementById("menu");

  botao.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!menu.classList.contains("mostrar")) {
  
      menu.classList.add("mostrar");
      menu.classList.remove("saindo");
    } else {

      menu.classList.add("saindo");
      menu.classList.remove("mostrar");

    
      setTimeout(() => {
        menu.classList.remove("saindo");
      }, 300); 
    }
  });

  document.addEventListener("click", () => {
  if (menu.classList.contains("mostrar")) {
    menu.classList.add("saindo");
    menu.classList.remove("mostrar");

    setTimeout(() => {
      menu.classList.remove("saindo");
    }, 300);
  }
});

  const _carrossel = document.querySelector('.carrossel-areas');
  const _cards = document.querySelectorAll('.carrossel-areas .card');
  const _anter = document.querySelector('.anter');
  const _prox = document.querySelector('.prox');

  let index = 0;

  function atualizarCarrossel() {
    const cardWidth = _cards[0].offsetWidth; 
    const gap = 20; 
    const deslocamento = index * (cardWidth + gap);
      _carrossel.style.transform = `translateX(-${deslocamento}px)`;
  }

  if (_prox && _anter && _carrossel) {
    _prox.addEventListener('click', function() {
      index = (index + 1) % _cards.length;
      atualizarCarrossel();
    });

    _anter.addEventListener('click', function() {
      index = (index - 1 + _cards.length) % _cards.length;
      atualizarCarrossel();
    });
  }

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