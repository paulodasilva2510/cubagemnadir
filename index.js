document
  .getElementById('calculadora')
  .addEventListener('submit', function (evento) {
    evento.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém os valores do formulário
    var comprimentoCaminhao = parseFloat(
      document.getElementById('comprimentoCaminhao').value
    );
    var larguraCaminhao = parseFloat(
      document.getElementById('larguraCaminhao').value
    );
    var volumeCarga = parseFloat(document.getElementById('volumeCarga').value);

    // Verifica se os valores são números
    if (
      isNaN(comprimentoCaminhao) ||
      isNaN(larguraCaminhao) ||
      isNaN(volumeCarga)
    ) {
      document.getElementById('resultado').textContent =
        'Por favor, insira números válidos.';
      return;
    }

    // Calcula a altura da carga
    var alturaCarga = volumeCarga / comprimentoCaminhao / larguraCaminhao;

    // Adiciona uma margem de 10%
    var alturaCargaComMargem = alturaCarga * 1.05;

    // Exibe o resultado
    document.getElementById('resultado').textContent =
      'Altura da Carga: ' + alturaCargaComMargem.toFixed(2) + ' m';
  });
