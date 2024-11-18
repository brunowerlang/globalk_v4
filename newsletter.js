document.getElementById('subscribe-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Previne o envio padrão do formulário

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();

  if (!name || !email) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  var endpoint = 'https://api.sheetmonkey.io/form/vH4mjZ4ydT8BkyVbeNNUn3';
  console.log('Enviando dados para o endpoint:', endpoint);

  // Referência ao botão
  var submitButton = document.querySelector('#subscribe-form button[type="submit"]');
  
  // Salva o texto original do botão
  var originalButtonText = submitButton.textContent;

  // Remove o texto e adiciona a imagem de carregamento
  submitButton.textContent = ''; // Remove o texto
  var loadingImg = document.createElement('img');
  loadingImg.src = '/images/loading.png';
  loadingImg.alt = 'Carregando...';
  loadingImg.className = 'loading-img';
  submitButton.appendChild(loadingImg); // Adiciona a imagem ao botão

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then(response => {
      console.log('Resposta do servidor:', response);
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Erro na resposta do servidor: ${response.status} - ${response.statusText}`);
    })
    .then(data => {
      console.log('Dados enviados com sucesso:', data);
      alert('Obrigado por se inscrever!');
    })
 
    .finally(() => {
      // Limpa os campos após o envio
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';

      // Remove a imagem de carregamento
      loadingImg.remove();

      // Restaura o texto original do botão
      submitButton.textContent = originalButtonText;
    });
});
