document.addEventListener("DOMContentLoaded", function () {

    setTimeout(() => {
        closeModal();
    }, 1000);
});

function closeModal() {
    let arrData = document.querySelectorAll('.btn-close-modal');
    arrData.forEach((element) => {
        element.addEventListener("click", () => {
            alert("cerrar ventana");
        });
    })
}