document.addEventListener("DOMContentLoaded", function() {
    const addTechStackBtn = document.getElementById('add-tech-stack-btn');
    const searchBtn = document.getElementById('search-btn');
    const techStackForm = document.getElementById('tech-stack-form');
    const techStackInputs = document.getElementById('tech-stack-inputs');
    const resultList = document.getElementById('result-list');
    const resultSection = document.getElementById('result-section');
  
    let techStacks = [];
  
    addTechStackBtn.addEventListener('click', function() {
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('tech-stack-input');
      input.placeholder = 'Enter tech stack';
      techStackInputs.appendChild(input);
    });
  
    searchBtn.addEventListener('click', function() {
      techStacks = Array.from(document.querySelectorAll('.tech-stack-input')).map(input => input.value.trim()).filter(stack => stack !== '');
      displayResults();
    });
  
    function displayResults() {
      resultSection.classList.remove('hidden');
      resultList.innerHTML = '';
      if (techStacks.length > 0) {
        for (let i = 0; i < 5; i++) {
          const resultItem = document.createElement('div');
          resultItem.classList.add('result-item');
          resultItem.innerHTML = `
          <div class="result-info">
          <h3><p>Name:<input type="text" id="myInput" name="myInput" ></h3>
            <h3><p>Score:<input type="text" id="myInput" name="myInput"></p></h3>
            <button onclick="sendNotification()">Send Notification</button>
            </div>
          `;
          resultList.appendChild(resultItem);
        }
      } else {
        resultList.textContent = 'No tech stacks entered.';
      }
    }
  
    window.sendNotification = function() {
      alert(`Email Send`);
    };
  });
  