   document.addEventListener('DOMContentLoaded', () => {
        
       document.getElementById('nome').textContent = localStorage.getItem('nome');
       document.getElementById('email').textContent = localStorage.getItem('email');
       document.getElementById('cpf').textContent = localStorage.getItem('cpf');
       document.getElementById('telefone').textContent = localStorage.getItem('telefone');
       document.getElementById('data_nasc').textContent = localStorage.getItem('data_nasc');
       document.getElementById('servicos').textContent = localStorage.getItem('servicos');
       document.getElementById('idade').textContent = localStorage.getItem('idade');
       document.getElementById('genero').textContent = localStorage.getItem('genero'); 
   
    
      const idade = localStorage.getItem("idade");
      const blocoResponsavel = document.getElementById("dados_responsavel");

      if ( idade < 18) {
        blocoResponsavel.style.display = "block";

      } else {
        blocoResponsavel.style.display = "none";
      }
      const input = document.getElementById('nome_responsavel');

      input.addEventListener('input', () => {
      input.value = input.value.replace(/[^A-Za-zÀ-ú\s]/g, '');
    });

      const cpf = document.getElementById('cpf_resposavel');

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

      const telefone = document.getElementById('tel_responsavel');
      
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