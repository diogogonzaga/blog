const nascimento = new Date(2006, 10, 2); // Exemplo: 15 de março de 2007
const hoje = new Date();

let idade = hoje.getFullYear() - nascimento.getFullYear();
const mes = hoje.getMonth() - nascimento.getMonth();

if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
  idade--;
}

const idadeSpan = document.getElementById("idade");
if (idadeSpan) {
  idadeSpan.textContent = idade;
}


function alerta(event) {
  event.preventDefault();

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
      window.open(link, '_blank');
    }
  });
}

document.querySelectorAll('a[onclick*="alerta"]').forEach(link => {
  link.addEventListener('click', alerta);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");


  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

 
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {

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


const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const modalImg = document.getElementById("modalImg");
const modalMedia = document.querySelector(".modal-media");

// Seleciona todos os botões de abrir modal (todos com a mesma classe)
document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    // Atualiza título
    modalTitle.textContent = btn.dataset.title || "";

    // Atualiza imagem, se houver
    if (btn.dataset.img) {
      modalImg.src = btn.dataset.img;
      modalMedia.style.display = "block";
    } else {
      modalMedia.style.display = "none";
      modalImg.src = "";
    }

    // Atualiza conteúdo via template
    modalInfo.innerHTML = "";
    if (btn.dataset.template) {
      const template = document.getElementById(btn.dataset.template);
      if (template) {
        const clone = template.content.cloneNode(true);
        modalInfo.appendChild(clone);
      }
    }

    // Abrir modal
    modal.classList.add("active");
  });
});

// Fechar modal no botão
closeModal?.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Fechar ao clicar fora
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Fechar com ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
  }
});
