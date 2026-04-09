// Scroll suave para seção
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Validação simples e alerta no envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simula envio e mostra mensagem
  alert(`Obrigado pela mensagem, ${name}! Responderemos em breve.`);
  
  this.reset();
});