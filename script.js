// Calcular idade automaticamente
const anoNascimento = 2007; // Altere aqui
const anoAtual = new Date().getFullYear();
document.getElementById('idade').textContent = anoAtual - anoNascimento;


function alerta(event, element) {
  event.preventDefault(); // Impede o redirecionamento imediato

  Swal.fire({
    title: "Esta página ainda não está formatada para dispositivos móveis!",
    text: "Queres mesmo abrir esta página?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim, continuar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Só redireciona após confirmação
      window.open(element.href, '_blank');
    }
  });
}
