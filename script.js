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

  // --- CONTADOR DE VISITAS (CountAPI) ---
  const contadorElemento = document.getElementById("contador-visitas");
  if (contadorElemento) {
    // ⚠️ SUBSTITUA AQUI PELO SEU USUÁRIO E NOME DO REPOSITÓRIO NO GITHUB:
    const namespace = "SAO-DATASCIENCE"; 
    const key = "10Projetos";

    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then(response => response.json())
      .then(data => {
        contadorElemento.innerText = data.value.toLocaleString("pt-BR");
      })
      .catch(error => {
        console.error("Erro ao carregar o contador de visitas:", error);
        contadorElemento.innerText = "Indisponível";
      });
  }
});
