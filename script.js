document.addEventListener("DOMContentLoaded", () => {
  // Elementos selecionados para animação de aparição (fade-in) ao rolar a página
  const elements = document.querySelectorAll(
    ".section h2, .two-columns, .project-grid a, .pills span, .contact"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));

  // Efeito atmosférico suave no cérebro da seção inicial (Hero)
  const brain = document.querySelector(".hero-brain");

  if (
    brain &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  ) {
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 5;
      const y = (event.clientY / window.innerHeight - 0.5) * 3;

      brain.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

// --- CONTADOR DE VISITAS GLOBAL (API v2) ---
  const contadorElemento = document.getElementById("contador-visitas");
  if (contadorElemento) {
    // Namespace e Chave do seu projeto
    const namespace = "SAO-DATASCIENCE"; 
    const key = "10Projetos";

    // Endpoint atualizado da versão 2 da API
    const url = `https://api.counterapi.dev/v2/${namespace}/${key}/up`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Na v2, o valor geralmente vem na propriedade 'count' ou 'value'
        const valorAtual = data.count !== undefined ? data.count : (data.value !== undefined ? data.value : 1);
        contadorElemento.innerText = Number(valorAtual).toLocaleString("pt-BR");
      })
      .catch(error => {
        console.error("Erro no contador global:", error);
        contadorElemento.innerText = "1";
      });
  }


});
