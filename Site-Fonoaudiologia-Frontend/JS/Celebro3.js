document.addEventListener("DOMContentLoaded", () => {
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
 
    const input = document.getElementById('nome');

  input.addEventListener('input', () => {
  input.value = input.value.replace(/[^A-Za-zÀ-ú\s]/g, '');
});

  const cpf = document.getElementById('cpf');

  cpf.addEventListener('input', function(e) {
  let value = e.target.value;
  value = value.replace(/\D/g, '');
  value = value.slice(0, 11);

  if (value.length === 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else if(value.length > 8) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
  } else if(value.length > 5) {
      value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
  } else if(value.length > 2) {
      value = value.replace(/(\d{3})/, '$1');
  }
    e.target.value = value;

});

  const telefone = document.getElementById('telefone');
  
  telefone.addEventListener('input', function(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.slice(0, 11);

    if (value.length === 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }

    e.target.value = value;
  });

  const nascimento = document.getElementById('data_nasc');
  let idade = 0; 

  nascimento.addEventListener('input', () => {
    const valor = nascimento.value; 

    if (valor) {
      const hoje = new Date();
      const dataNasc = new Date(valor);

      idade = hoje.getFullYear() - dataNasc.getFullYear();

      const mesHoje = hoje.getMonth();
      const diaHoje = hoje.getDate();
      const mesNasc = dataNasc.getMonth();
      const diaNasc = dataNasc.getDate();

      if (mesHoje < mesNasc || (mesHoje === mesNasc && diaHoje < diaNasc)) {
        idade--;
    }
  }

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  localStorage.setItem('nome', document.getElementById('nome').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('telefone', document.getElementById('telefone').value);
  localStorage.setItem('data_nasc', nascimento.value);
  localStorage.setItem('cpf', document.getElementById('cpf').value);
  localStorage.setItem('genero', document.getElementById('genero').value);
  localStorage.setItem('servicos', document.getElementById('servicos').value);
  localStorage.setItem('idade', String(idade));
   
  window.location.href = 'P_confirmacao.html';
})
})

});