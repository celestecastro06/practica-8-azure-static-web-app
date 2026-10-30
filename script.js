const timeElement = document.querySelector('#current-time');
const testButton = document.querySelector('#test-button');
const testResult = document.querySelector('#test-result');
const regionSelector = document.querySelector('#region');

function updateTime() {
  const now = new Date();
  timeElement.textContent = `Última verificación: ${now.toLocaleTimeString('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })}`;
}

testButton.addEventListener('click', () => {
  const region = regionSelector.value;
  testResult.textContent = `✓ Prueba exitosa en ${region}`;
  testButton.textContent = 'Prueba completada';
});

regionSelector.addEventListener('change', () => {
  testResult.textContent = 'Esperando prueba para la nueva región...';
  testButton.textContent = 'Ejecutar prueba';
});

updateTime();
setInterval(updateTime, 1000);
