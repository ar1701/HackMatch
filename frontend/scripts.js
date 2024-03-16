
function EmailInput(value, onChange) {
    return `
      <div class="form-group">
        <label>Email:</label>
        <input id="email" type="email" value="${value}" onchange="${onChange}" required />
      </div>
    `;
  }
  

  function PhoneInput(value, onChange) {
    return `
      <div class="form-group">
        <label>Phone Number:</label>
        <input id="phone" type="tel" value="${value}" onchange="${onChange}" required />
      </div>
    `;
  }
  
  function NameInput(value, onChange) {
    return `
      <div class="form-group">
        <label>Name:</label>
        <input id="name" type="text" value="${value}" onchange="${onChange}" required />
      </div>
    `;
  }
  
 
  function SubmitButton(onClick) {
    return `
      <button type="submit" onclick="${onClick}">
        Login
      </button>
    `;
  }
  

  function WelcomeMessage() {
    return '<h2>Welcome to Hack-Match</h2>';
  }

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
        <div class="line-partition"></div> 
        <div class="right-section">
          ${WelcomeMessage()}
        </div>
      </div>
    `;
  
    document.getElementById('login-form').addEventListener('submit', handleSubmit);
    document.getElementById('email').addEventListener('input', handleEmailChange);
    document.getElementById('phone').addEventListener('input', handlePhoneChange);
    document.getElementById('name').addEventListener('input', handleNameChange);
  });
  

  function handleEmailChange(event) {
    
    const emailValue = event.target.value;
 
  }
  
  function handlePhoneChange(event) {
 
    const phoneValue = event.target.value;
   
  }
  
  function handleNameChange(event) {

    const nameValue = event.target.value;
 
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const name = document.getElementById('name').value;

  }
  