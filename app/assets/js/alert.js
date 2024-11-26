function viewAlert(type, message) {
    const alertContainer = document.querySelector('.alert-container');
    const alert = document.createElement('div');
    alert.classList.add('custom-alert', `alert-${type}`)
    alert.textContent = message;
    alertContainer.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 4000);
}