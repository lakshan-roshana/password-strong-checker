function checkPasswordStrength() {
    const password = document.getElementById("password").value;
  
    // Define criteria
    const lengthError = password.length < 8;
    const digitError = !/\d/.test(password);
    const uppercaseError = !/[A-Z]/.test(password);
    const lowercaseError = !/[a-z]/.test(password);
    const specialCharError = !/[!@#$%^&*(),.?":{}|<>]/.test(password);
    const commonPasswords = ["password", "123456", "qwerty"];
    const commonPasswordError = commonPasswords.includes(password.toLowerCase());
  
    // Evaluate overall strength
    const errors = {
      "Too short": lengthError,
      "Missing digit": digitError,
      "Missing uppercase letter": uppercaseError,
      "Missing lowercase letter": lowercaseError,
      "Missing special character": specialCharError,
      "Common password": commonPasswordError,
    };
  
    // Generate feedback
    const feedback = Object.keys(errors).filter((key) => errors[key]);
    const result = document.getElementById("result");
    if (feedback.length === 0) {
      result.textContent = "Strong password!";
      result.style.color = "green";
    } else {
      result.textContent = "Weak password. Suggestions: " + feedback.join(", ");
      result.style.color = "red";
    }
  }
  