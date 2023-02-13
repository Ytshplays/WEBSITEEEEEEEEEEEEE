document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    
    if (username === '' || password === '') {
      alert('Username and password cannot be empty');
      return;
    }
    
    // Perform authentication here you dummy owner
    
    alert('Login successful');
  });
  