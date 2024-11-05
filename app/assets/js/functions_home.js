let loadingScreen = document.querySelector('.loading-screen');
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        closeModal();
        openModalSaveTask();
        openModalLogout();
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
            let modal = document.querySelectorAll('.modal');
            modal.forEach(element => {
                element.classList.add("hidden");
            })
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
/*
 *Funcion que abre el modal para cerrar sesion 
 */
function openModalLogout() {
    let btnOpenModalLogout = document.getElementById('btn-exit-sesion');
    btnOpenModalLogout.addEventListener("click", () => {
        let modalExitSesion = document.querySelector('.modal-exit-sesion');
        modalExitSesion.classList.remove("hidden");
    })
}