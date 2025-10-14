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

// Contact Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form")
  const submitBtn = document.getElementById("submit-btn")
  const successMessage = document.getElementById("success-message")
  const errorMessage = document.getElementById("error-message")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Show loading state
    submitBtn.classList.add("loading")
    submitBtn.disabled = true

    // Get form data
    const formData = new FormData(form)

    try {
      // Submit to Formspree
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Show success message
        successMessage.classList.add("show")
        form.classList.add("hidden")

        // Reset form
        form.reset()

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" })

        // Optional: Hide success message and show form again after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove("show")
          form.classList.remove("hidden")
        }, 5000)
      } else {
        // Show error message
        errorMessage.classList.add("show")

        // Hide error message after 5 seconds
        setTimeout(() => {
          errorMessage.classList.remove("show")
        }, 5000)
      }
    } catch (error) {
      // Show error message
      errorMessage.classList.add("show")

      // Hide error message after 5 seconds
      setTimeout(() => {
        errorMessage.classList.remove("show")
      }, 5000)
    } finally {
      // Remove loading state
      submitBtn.classList.remove("loading")
      submitBtn.disabled = false
    }
  })
})