// Atualiza a idade automaticamente
// Data de nascimento (AAA, MM, DD) -> ATENÇÃO: mês começa em 0 (Janeiro = 0)
const nascimento = new Date(2006, 10, 2); // Exemplo: 15 de março de 2007
const hoje = new Date();

let idade = hoje.getFullYear() - nascimento.getFullYear();
const mes = hoje.getMonth() - nascimento.getMonth();

// Ajusta se ainda não fez anos este ano
if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
  idade--;
}

const idadeSpan = document.getElementById("idade");
if (idadeSpan) {
  idadeSpan.textContent = idade;
}


// Alerta de página descontinuada
function alerta(event) {
  event.preventDefault(); // Impede que o link seja seguido automaticamente

  const link = event.currentTarget.href;

  Swal.fire({
    title: "Futuramente este projeto estará indisponível!",
    text: "Futuramente este projeto estará indisponível, deseja acessar o site?",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Continuar para o site",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(link, '_blank'); // Abre em nova aba
    }
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



