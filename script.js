let oscillator;
let audioContext = new (window.AudioContext || window.webkitAudioContext)();

window.onload = function() {
  const frequency = localStorage.getItem('frequency');
  document.getElementById('displayFrequency').textContent = frequency;

  document.getElementById('startButton').addEventListener('click', function() {
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // Sinuswelle
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // Frequenz einstellen
    oscillator.connect(audioContext.destination);
    oscillator.start();
  });

  document.getElementById('stopButton').addEventListener('click', function() {
    if (oscillator) {
      oscillator.stop();
      oscillator.disconnect();
    }
  });
};
