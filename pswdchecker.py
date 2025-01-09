import re

def check_password_strength(password):
    # Define criteria
    length_error = len(password) < 8
    digit_error = not re.search(r"\d", password)
    uppercase_error = not re.search(r"[A-Z]", password)
    lowercase_error = not re.search(r"[a-z]", password)
    special_char_error = not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password)
    common_password_error = password.lower() in ["password", "123456", "qwerty"]
    
    # Evaluate overall strength
    errors = {
        "Too short": length_error,
        "Missing digit": digit_error,
        "Missing uppercase letter": uppercase_error,
        "Missing lowercase letter": lowercase_error,
        "Missing special character": special_char_error,
        "Common password": common_password_error,
    }
    
    # Generate feedback
    feedback = [error for error, exists in errors.items() if exists]
    if not feedback:
        return "Strong password!"
    return "Weak password. Suggestions: " + ", ".join(feedback)


# Example Usage
password = input("Enter a password to check: ")
result = check_password_strength(password)
print(result)
