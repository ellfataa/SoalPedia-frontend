const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

document.getElementById('submitSignUp').addEventListener('click', function(e) {
  e.preventDefault();
  
  const signUpForm = document.getElementById('signUpForm');
  const signUpUsername = signUpForm.querySelector('#username').value.trim();
  const signUpEmail = signUpForm.querySelector('#email').value.trim();
  const signUpPassword = signUpForm.querySelector('#password').value.trim();

  if (!signUpUsername || !signUpEmail || !signUpPassword) {
    alert('Harap lengkapi semua bidang untuk pendaftaran!');
    return;
  }
  
  alert('Pendaftaran berhasil! Silakan login.');
  
  container.classList.remove('active');
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorElement = document.getElementById('login-error');
  
  errorElement.style.display = 'none';
  errorElement.textContent = '';
  
  if (!username || !password) {
    showError(errorElement, 'Username dan password harus diisi!');
    return;
  }
  
  simulateLogin(username, password);
});

function showError(element, message) {
  element.textContent = message;
  element.style.display = 'block';
}

function simulateLogin(username, password) {
  setTimeout(() => {
    localStorage.setItem('currentUser', JSON.stringify({ username }));
    window.location.href = 'index.html';
  }, 500);
}