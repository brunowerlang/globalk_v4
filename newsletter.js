  // Event listener para capturar o envio do formulário
  document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário
    
    // Obtém os valores dos campos de nome e email
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Verifica se os campos não estão vazios
    if (!name || !email) {
      alert('Por favor, preencha todos os campos.');
      return; // Se algum campo estiver vazio, não envia o formulário
    }

    // Exibe os valores coletados no console para depuração
    console.log('Nome:', name);
    console.log('Email:', email);
    
    // URL do endpoint do Sheet Monkey
    var endpoint = 'https://api.sheetmonkey.io/form/vH4mjZ4ydT8BkyVbeNNUn3'; // O seu endpoint do Sheet Monkey
    
    // Envia os dados do formulário para o Sheet Monkey
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,  // Envia o nome coletado
        email: email, // Envia o email coletado
      }),
    })
    .then(response => response.json()) // Espera a resposta do servidor
    .then(data => {
      // Exibe uma mensagem de agradecimento
      alert('Obrigado por se inscrever!');
      
      // Limpa os campos após o envio
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      
      // Log de sucesso para depuração
      console.log('Dados enviados com sucesso!', data);
    })
    .catch(error => {
      // Em caso de erro, exibe no console
      console.error('Erro ao enviar dados:', error);
    });
  });