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

// --- CONTADOR DE VISITAS GLOBAL (CounterAPI) ---
  const contadorElemento = document.getElementById("contador-visitas");
  if (contadorElemento) {
    // Espaço e chave únicos para o seu portfólio global
    const workspace = "sidnei";
    const counterName = "portfolio-views";

    // Faz a chamada para incrementar e buscar o valor global na nuvem
    fetch(`https://api.counterapi.dev/v1/${workspace}/${counterName}/up`)
      .then(response => {
        if (!response.ok) throw new Error("Erro na resposta da API");
        return response.json();
      })
      .then(data => {
        // Exibe o número global formatado (ex: 1, 2, 3...)
        contadorElemento.innerText = Number(data.data).toLocaleString("pt-BR");
      })
      .catch(error => {
        console.error("Erro ao carregar o contador global:", error);
        contadorElemento.innerText = "1";
      });
  }


});
