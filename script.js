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

// --- CONTADOR DE VISITAS GLOBAL (Alternativo e Estável) ---
  const contadorElemento = document.getElementById("contador-visitas");
  if (contadorElemento) {
    // Usa um serviço de contador global público e livre
    fetch("https://api.countapi.xyz/hit/sao-datascience/10projetos")
      .then(async response => {
        if (!response.ok) {
          // Se não existir, tenta criar o contador automaticamente
          await fetch("https://api.countapi.xyz/create?namespace=sao-datascience&key=10projetos&value=1");
          return { value: 1 };
        }
        return response.json();
      })
      .then(data => {
        const valor = data.value !== undefined ? data.value : 1;
        contadorElemento.innerText = Number(valor).toLocaleString("pt-BR");
      })
      .catch(error => {
        console.error("Erro no contador:", error);
        contadorElemento.innerText = "1";
      });
  }


});
