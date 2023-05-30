function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var savedUsername = getCookie('username');
    if (savedUsername) {
      alert('Welcome back, ' + savedUsername + '!');
    }
  
    var usernameInput = document.getElementById('username');

    var savedUsername = getCookie('username');
    if (savedUsername) {
      usernameInput.value = savedUsername;
    }
  
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      var username = usernameInput.value;
      var password = document.getElementById('password').value;
  
      if (username === 'zgjimtopojani' && password === '123456') {
        setCookie('username', username, 30);
  
        alert('Login successful!');
      } else {
        var errorText = document.createElement('p');
        errorText.className = 'error';
        errorText.textContent = 'Invalid username or password';
  
        var container = document.querySelector('.container');
        container.appendChild(errorText);
      }
    });
  });
  