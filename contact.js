const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio tradicional do formulário

  // Referência ao botão de envio
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Salva o texto original do botão
  const originalButtonText = submitButton.textContent;

  // Remove o texto do botão e adiciona a imagem de carregamento
  submitButton.textContent = ''; // Remove o texto
  const loadingImg = document.createElement('img');
  loadingImg.src = '/images/loading.png'; // Caminho para sua imagem
  loadingImg.alt = 'Carregando...';
  loadingImg.className = 'loading-img';
  submitButton.appendChild(loadingImg); // Adiciona a imagem ao botão

  // Captura os dados do formulário
  const formData = new FormData(form);
  const object = Object.fromEntries(formData); // Converte FormData em objeto

  // Envia os dados para a API do Web3Forms
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      ...object,  // Dados do formulário
      access_key: '8ae7421f-5105-40aa-9b6d-b3961690c64a' // Sua chave de API do Web3Forms
    })
  })
    .then(response => response.json())
 
    .catch(error => {
      console.log(error); // Registra o erro no console
      result.innerHTML = "Algo deu errado! Por favor, tente novamente.";
    })
    .finally(() => {
      // Limpa o formulário
      form.reset();
      
      // Restaura o texto do botão para "Enviado"
      submitButton.textContent = 'Sent';
      
      // Adiciona a classe para o botão ficar verde
      submitButton.classList.add('btn-green');
      
      // Remove a imagem de carregamento
      loadingImg.remove(); 
      
      // Exibe a mensagem por 3 segundos e depois a esconde
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
