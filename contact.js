const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio tradicional do formulário

  // Exibe o ícone de carregamento
  result.style.display = "block";
  result.innerHTML = ""; // Limpa qualquer conteúdo anterior
  result.classList.add("loading-icon"); // Adiciona o ícone de carregamento

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
  .then(async (response) => {
    let jsonResponse = await response.json(); // Aguardar resposta em formato JSON
    if (response.ok) {  // Verifica se a resposta é bem-sucedida
      result.classList.remove("loading-icon"); // Remove o ícone de carregamento
    } else {
      result.innerHTML = `Error: ${jsonResponse.message || 'Unknown error'}`; // Exibe erro com a mensagem da API
      result.classList.remove("loading-icon"); // Remove o ícone de carregamento
    }
  })
  .catch(error => {
    console.log(error); // Registra o erro no console
    result.innerHTML = "Something went wrong!"; // Exibe mensagem de erro genérico
    result.classList.remove("loading-icon"); // Remove o ícone de carregamento
  })
  .finally(() => {
    form.reset(); // Reseta o formulário após envio
    setTimeout(() => {
      result.style.display = "none"; // Oculta a mensagem após 3 segundos
    }, 3000);
  });
});
