// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  // 1. Rolagem Suave para os Links da Navegação
  const links = document.querySelectorAll('nav a, a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      // Verifica se o link aponta para uma seção válida na página
      if (targetId.startsWith("#") && targetId.length > 1) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // 2. Manipulação e Validação do Formulário de Contato
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita o recarregamento da página

      // Captura os dados digitados pelo usuário
      const nome = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const telefone = form.querySelector('input[type="tel"]').value;
      const assunto = form.querySelector("textarea").value;

      // Simulação de envio com feedback visual
      alert(
        `Obrigado pelo contato, ${nome}! Sua mensagem sobre "${assunto || "Consultoria"}" foi enviada com sucesso para a equipe EngNet.`,
      );

      // Limpa o formulário após o envio
      form.reset();
    });
  }
});
