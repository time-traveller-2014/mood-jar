const quotes = {
  Sadness: [
    "It’s okay to feel broken — it means you tried to hold too much.",
    "Sometimes the tears we shed are the weight we no longer have to carry."
  ],
  Loneliness: [
    "You are not alone in feeling alone.",
    "Some silences are louder than words. And they ache."
  ],
  Anxiety: [
    "Take a deep breath. You’ve survived every moment so far.",
    "Anxiety is loud, but you are louder. Whisper peace to yourself."
  ],
  Heartbreak: [
    "You loved deeply. That is never a weakness.",
    "Letting go doesn’t mean forgetting. It means choosing peace."
  ]
};
let currentMood = '';
function showMood(mood) {
  currentMood = mood;
  document.getElementById('mood-selection').style.display = 'none';
  document.getElementById('quote-display').style.display = 'block';
  pickAnother();
}
function pickAnother() {
  const quoteList = quotes[currentMood];
  const random = Math.floor(Math.random() * quoteList.length);
  document.getElementById('quote-text').textContent = quoteList[random];
}
function goBack() {
  document.getElementById('quote-display').style.display = 'none';
  document.getElementById('mood-selection').style.display = 'block';
}
