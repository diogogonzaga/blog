const anoNascimento = 2007; // Altere aqui
const anoAtual = new Date().getFullYear();
document.getElementById('idade').textContent = anoAtual - anoNascimento;


function alerta(event, element) {
  event.preventDefault(); 

Swal.fire({
  title: "Futuramente esta página não vai mais existir!",
  icon: "success",
  draggable: true
});
}

function copiarEmail() {
  const email = document.getElementById('email-text').textContent;
  navigator.clipboard.writeText(email);
  Swal.fire({
    icon: 'success',
    title: 'Email copiado!',
    text: email,
    toast: true,
    position: 'top-end',
    timer: 2000,
    showConfirmButton: false
  });
}


  // Mostra o botão ao descer a página
  window.addEventListener("scroll", function () {
    document.getElementById("btn-topo").style.display =
      window.scrollY > 200 ? "block" : "none";
  });

  // Realce no menu atual (scrollspy simples)
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href").includes(current)) {
        a.classList.add("active");
      }
    });
  });



  
