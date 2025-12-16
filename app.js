function analyzeEmotion() {
  const text = document.getElementById("textInput").value;
  const result = predictEmotion(text);

  document.getElementById("output").innerHTML = `
    <p><strong>Emotion:</strong> ${result.label}</p>
    <p><strong>Confidence Score:</strong> ${result.score}</p>
    <p><em>This model uses explainable lexical scoring (no black box).</em></p>
  `;
}
