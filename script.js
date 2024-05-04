//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  // Check if there are saved details
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    document.getElementById('existing').style.display = 'block';
  }

  // Add event listener to the form submit
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('checkbox').checked;

    // Save details in local storage if "remember me" checkbox is checked
    if (remember) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // Remove saved details if checkbox is unchecked
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);
  });

  // Add event listener to the "Login as existing user" button
  document.getElementById('existing').addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    alert('Logged in as ' + savedUsername);
  });
});