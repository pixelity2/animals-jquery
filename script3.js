// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Function to get the value of a cookie
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
    // Check if a username cookie exists
    var savedUsername = getCookie('username');
    if (savedUsername) {
      alert('Welcome back, ' + savedUsername + '!');
    }
  
    var usernameInput = document.getElementById('username');
  
    // Check if a username cookie exists
    var savedUsername = getCookie('username');
    if (savedUsername) {
      usernameInput.value = savedUsername;
    }
  
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var username = usernameInput.value;
      var password = document.getElementById('password').value;
  
      if (username === 'zgjimtopojani' && password === '123456') {
        // Save the username in a cookie for 30 days
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
  