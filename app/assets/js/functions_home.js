let loadingScreen = document.querySelector('.loading-screen');
document.addEventListener("DOMContentLoaded", function () {
    //intervalo para actualizar la hora
    setInterval(() => {
        updateClock();
    }, 1000);
    //Mostrar el modal de registro de tareas
    setTimeout(() => {
        closeModal();
        openModalSaveTask();
        openModalLogout();
        updateClock();
        openModalProfile();
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
/**
 * Open modal Perfil
 */
function openModalProfile() {
    let btnModalProfile = document.getElementById('btn-form-profile');
    btnModalProfile.addEventListener("click", () => {
        let modalPRofile = document.querySelector('.modal-profile-user');
        modalPRofile.classList.remove("hidden");
    })
}
/*
 *Funcion que actualiza el reloj 
 */
function updateClock() {
    const now = new Date();
    //elementos de la actualizacion de hora y fecha digital
    const clockTime = document.getElementById("clock-time");
    const clockDate = document.getElementById("clock-date");

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clockTime.textContent = `${hours}:${minutes}:${seconds}`

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    clockDate.textContent = now.toLocaleDateString("es-Es", options);

    //elementos de la actualizacion de hora  analogica
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    const hour = ((now.getHours() / 12) * 360) + ((now.getMinutes() / 60) * 30) + 90;
    const minute = ((now.getMinutes() / 60) * 360) + ((now.getSeconds() / 60) * 6) + 90;
    const second = ((now.getSeconds() / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hour}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    secondHand.style.transform = `rotate(${second}deg)`;

}