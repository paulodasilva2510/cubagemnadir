document
  .getElementById('calculadora')
  .addEventListener('submit', function (evento) {
    evento.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém os valores do formulário
    var porcento = parseFloat(document.getElementById('porcento').value);
    var comprimentoCaminhao = parseFloat(
      document.getElementById('comprimentoCaminhao').value
    );
    var larguraCaminhao = parseFloat(
      document.getElementById('larguraCaminhao').value
    );
    var volumeCarga = parseFloat(document.getElementById('volumeCarga').value);

    // Verifica se os valores são números
    if (
      isNaN(porcento) ||
      isNaN(comprimentoCaminhao) ||
      isNaN(larguraCaminhao) ||
      isNaN(volumeCarga)
    ) {
      document.getElementById('resultado').textContent =
        'Por favor, insira números válidos.';
      return;
    }

    // Calcula a altura da carga com base na porcentagem
    var alturaCarga =
      (volumeCarga / (comprimentoCaminhao * larguraCaminhao)) *
      (1 + porcento / 100);

    // Exibe o resultado
    document.getElementById('resultado').textContent =
      'Altura da Carga: ' + alturaCarga.toFixed(2) + ' metros';
  });
