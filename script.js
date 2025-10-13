// Typing effect for hero heading
document.addEventListener("DOMContentLoaded", () => {
  const textToType = "hi, richelle here."
  const typedTextElement = document.getElementById("typed-text")
  let charIndex = 0

  function typeCharacter() {
    if (charIndex < textToType.length) {
      const char = textToType.charAt(charIndex)

      // Check if we need to add the highlight span for "richelle"
      if (charIndex === 4) {
        // Start of "richelle"
        typedTextElement.innerHTML += '<span class="highlight">'
      }

      typedTextElement.innerHTML += char

      if (charIndex === 11) {
        // End of "richelle"
        typedTextElement.innerHTML += "</span>"
      }

      charIndex++

      // Vary typing speed slightly for more natural effect
      const typingSpeed = Math.random() * 100 + 50 // 50-150ms
      setTimeout(typeCharacter, typingSpeed)
    }
  }

  // Start typing after a brief delay
  setTimeout(typeCharacter, 500)
})
