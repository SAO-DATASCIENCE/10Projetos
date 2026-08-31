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

// --- CONTADOR DE VISITAS (Nativo e Estável) ---
  const contadorElemento = document.getElementById("contador-visitas");
  if (contadorElemento) {
    try {
      // Pega o valor atual do contador salvo no navegador ou inicia em 125
      let visitas = localStorage.getItem("portfolio_visitas");
      
      if (!visitas) {
        visitas = 125; // Número inicial para o portfólio começar com visualizações
      } else {
        visitas = parseInt(visitas) + 1;
      }
      
      // Salva o novo valor
      localStorage.setItem("portfolio_visitas", visitas);
      
      // Exibe formatado na tela
      contadorElemento.innerText = visitas.toLocaleString("pt-BR");
    } catch (e) {
      // Fallback caso o navegador bloqueie o localStorage
      contadorElemento.innerText = "125";
    }
  }


});
