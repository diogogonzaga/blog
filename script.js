const anoNascimento = 2007; // Altere aqui
const anoAtual = new Date().getFullYear();
document.getElementById('idade').textContent = anoAtual - anoNascimento;


function alerta(event, element) {
  event.preventDefault(); 

  Swal.fire({
    title: "Esta página tem apenas alguns recursos que auxiliam o desenvolvimento web, futuramente existirá mais recursos",
    text: "Queres mesmo abrir esta página?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim, continuar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(element.href, '_blank');
    }
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
