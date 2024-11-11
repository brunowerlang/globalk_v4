function translatePage(targetLanguage) {
    const apiKey = 'AIzaSyAPXbbPo89J9jame2kubA22u3TxcBzBWUI'; // Substitua pela sua chave de API do Google Translate
  
    $('h1, h2, h3, h4, h5, p, li, span, div, a, h6').each(function () {
      const element = $(this);
      if (element.text().trim() !== "" && !element.children().length) {
        const originalHTML = element.html();
        const text = element.text().trim();
  
        $.ajax({
          url: `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            q: text,
            target: targetLanguage,
            format: 'text'
          }),
          success: function (response) {
            const translatedText = response.data.translations[0].translatedText;
            element.html(originalHTML.replace(text, translatedText));
          },
          error: function (err) {
            console.error('Erro na tradução', err);
          }
        });
      }
    });
  }
  
  $(document).ready(function () {
    $('#translateButton').click(function () {
      translatePage('en');
    });
    $('#translateButton2').click(function () {
      translatePage('es');
    });
    $('#translateButton3').click(function () {
      translatePage('pt-BR');
    });
  });
  