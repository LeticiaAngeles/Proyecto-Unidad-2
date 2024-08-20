document.addEventListener('DOMContentLoaded', function() {
    var userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('nombre').textContent = userName;
    }
});