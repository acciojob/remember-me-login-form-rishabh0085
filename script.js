const btn = document.getElementById('submit');
const existingButton = document.getElementById('existing');

btn.addEventListener("click", eventDetails);
existingButton.addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername !== null) {
        alert(`Logged in as ${savedUsername}`);
    }
});

function eventDetails(event) {
    event.preventDefault();

    const user = document.getElementById('username');
    const pass = document.getElementById('password');
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', user.value);
        localStorage.setItem('password', pass.value);
        existingButton.style.display = 'block';
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingButton.style.display = 'none';
    }

    alert(`Logged in as ${user.value}`);
}