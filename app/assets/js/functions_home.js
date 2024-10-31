let loadingScreen = document.querySelector('.loading-screen');
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        closeModal();
        openModalSaveTask();
        loadingScreen.classList.add("hidden");
    }, 1000);

});

/*
 * Funcion que cierra el modal
 */
function closeModal() {
    let arrData = document.querySelectorAll('.btn-close-modal');
    arrData.forEach((element) => {
        element.addEventListener("click", () => {
            let modal = document.querySelector('.modal');
            modal.classList.add("hidden");
        });
    })
}
/*
 *Funcion que abre el modal para registrar nuevas tareas
 */
function openModalSaveTask() {
    let btnFormRegisterTask = document.getElementById('btn-form-register');
    btnFormRegisterTask.addEventListener("click", function () {
        let modalSaveTask = document.querySelector('.modal-save-task');
        modalSaveTask.classList.remove("hidden");
    });
}