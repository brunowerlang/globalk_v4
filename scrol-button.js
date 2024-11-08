document.getElementById("contactButton").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão
    document.querySelector(".contact-section").scrollIntoView({
      behavior: "smooth" // Rolagem suave
    });
  });