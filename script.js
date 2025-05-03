// Calcular idade automaticamente
const anoNascimento = 2007; // Altere aqui
const anoAtual = new Date().getFullYear();
document.getElementById('idade').textContent = anoAtual - anoNascimento;
