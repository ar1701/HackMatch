// EmailInput.js
function EmailInput(value, onChange) {
    return `
      <div class="form-group">
        <label>Email:</label>
        <input id="email" type="email" value="${value}" onchange="${onChange}" required />
      </div>
    `;
  }
  
  // PhoneInput.js
  function PhoneInput(value, onChange) {
    return `
      <div class="form-group">
        <label>Phone Number:</label>
        <input id="phone" type="tel" value="${value}" onchange="${onChange}" required />
      </div>
    `;
  }
  
  // NameInput.js
  function NameInput(value, onChange) {
    return `
      <div class="form-group">
        <label>Name:</label>
        <input id="name" type="text" value="${value}" onchange="${onChange}" required />
      </div>
    `;
  }
  
  // SubmitButton.js
  function SubmitButton(onClick) {
    return `
      <button type="submit" onclick="${onClick}">
        Login
      </button>
    `;
  }
  
  // WelcomeMessage.js
  function WelcomeMessage() {
    return '<h2>Welcome to Hack-Match</h2>';
  }
  
  // App.js
  document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.getElementById("login");
    loginContainer.innerHTML = `
      <div class="login-container">
        <div class="left-section">
          <h2>Login</h2>
          <form id="login-form">
          ${NameInput('', 'handleNameChange(event)')}
            ${EmailInput('', 'handleEmailChange(event)')}
            ${PhoneInput('', 'handlePhoneChange(event)')}
            
            ${SubmitButton('handleSubmit(event)')}
          </form>
        </div>
        <div class="right-section">
          ${WelcomeMessage()}
        </div>
      </div>
    `;
  
    // Add event listeners for form submission and input changes
    document.getElementById('login-form').addEventListener('submit', handleSubmit);
    document.getElementById('email').addEventListener('input', handleEmailChange);
    document.getElementById('phone').addEventListener('input', handlePhoneChange);
    document.getElementById('name').addEventListener('input', handleNameChange);
  });
  
  // Define event handlers
  function handleEmailChange(event) {
    // Handle email input change
    const emailValue = event.target.value;
    // Do something with emailValue...
  }
  
  function handlePhoneChange(event) {
    // Handle phone number input change
    const phoneValue = event.target.value;
    // Do something with phoneValue...
  }
  
  function handleNameChange(event) {
    // Handle name input change
    const nameValue = event.target.value;
    // Do something with nameValue...
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const name = document.getElementById('name').value;
    // Do something with email, phone, and name...
  }
  