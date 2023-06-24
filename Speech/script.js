// Select the button element with class "speak"
let btn = document.querySelector('.speak');

// Add a click event listener to the button
btn.addEventListener('click', () => {
    // Get the value of the input text field
    let text = document.querySelector('.ipt-text').value;

    // Create a new SpeechSynthesisUtterance object with the input text
    let voice = new SpeechSynthesisUtterance(text);

    // Set the language of the speech to Portuguese (Brazil)
    voice.lang = 'pt-BR';

    // Set the pitch, volume, and rate of the speech
    voice.pitch = 1;
    voice.volume = 1;
    voice.rate = 1;

    // Use the speechSynthesis API to speak the provided text
    speechSynthesis.speak(voice);
});