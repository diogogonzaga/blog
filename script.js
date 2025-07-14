// Atualiza a idade automaticamente
const anoNascimento = 2007;
const anoAtual = new Date().getFullYear();
const idadeSpan = document.getElementById('idade');
if (idadeSpan) {
  idadeSpan.textContent = anoAtual - anoNascimento;
}

// Alerta de página descontinuada
function alerta(event) {

  Swal.fire({
    title: "Futuramente esta página não estará disponível!",
    text: "Este projeto está a ser reformulado.",
    icon: "info",
    confirmButtonText: "OK"
  });
}

// Seleciona todos os links com alerta
document.querySelectorAll('a[onclick*="alerta"]').forEach(link => {
  link.addEventListener('click', alerta);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Abrir/Fechar menu mobile
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Fechar menu ao clicar num link e permitir scroll suave
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      // comportamento padrão de scroll suave está ativado no CSS, então não precisamos prevenir
      // só fechamos o menu, se ele estiver aberto
      navLinks.classList.remove("active");
    });
  });
});


// Copiar email
function copiarEmail() {
  const email = document.getElementById("email-text").textContent;
  navigator.clipboard.writeText(email)
    .then(() => {
      Swal.fire({
        title: "Email copiado!",
        text: "O endereço de email foi copiado para a área de transferência.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
    })
    .catch(err => {
      console.error("Erro ao copiar o email:", err);
    });
}

