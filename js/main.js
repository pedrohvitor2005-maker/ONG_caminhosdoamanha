// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o formulário da página de cadastro
  const form = document.querySelector(".form-box");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita o envio automático do form

      let valid = true;
      const inputs = form.querySelectorAll("input");

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "1px solid #999";
        }
      });

      if (!valid) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }

      alert("Cadastro enviado com sucesso!");
      form.reset();
    });
  }

  // Exemplo de SPA básico: navegação sem recarregar
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").endsWith(".html")) {
        // Aqui poderia ser implementado fetch + innerHTML para SPA
        console.log(`Você clicou no link para: ${link.textContent}`);
      }
    });
  });
});
