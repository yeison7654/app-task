let loadingScreen = document.querySelector('.loading-screen');
document.addEventListener("DOMContentLoaded", function () {
    getTasks();
    //intervalo para actualizar la hora
    setInterval(() => {
        updateClock();
        verifySessionUser();
    }, 1000);
    //Mostrar el modal de registro de tareas
    setTimeout(() => {
        closeModal();
        openModalSaveTask();
        openModalLogout();
        updateClock();
        openModalProfile();
        logOut();
        sendData();
        changeStatusTask();
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
/*
 *Funcion que verifica si el usuario a ingresado al sistema 
 */
function verifySessionUser() {
    const url = "http://localhost/app-task/Api/verifySessionUser.php";
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ocurrio un error inesperado" + response.status);
            }
            return response.json();
        })
        .then((data) => {
            if (!data.status) {
                viewAlert(data.type, data.message);
                window.location.href = data.url
            }
            let userName = document.querySelector(".user-name")
            userName.innerHTML = data.infoUser.nombre_usuario
        })
        .catch((e) => {
            viewAlert("error", e.message);
        })
}

/*
 * Funcion que permite cerrar sesion
 */
function logOut() {
    const btnExit = document.querySelector(".btn-exit-modal");
    btnExit.addEventListener("click", () => {
        window.location.href = "http://localhost/app-task/Api/logOut.php";
    })
}
/**
 * Funcion que registra las tareas
 */
function sendData() {
    if (document.querySelector("#task-form")) {
        const saveForm = document.querySelector("#task-form");
        saveForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(saveForm);
            const encabezados = new Headers();
            const config = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: encabezados,
                body: formData
            }
            const url = "http://localhost/app-task/Api/createTask.php";
            fetch(url, config)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud " + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data.status) {
                        viewAlert(data.type, data.message);
                        return false;
                    }
                    getTasks();
                    saveForm.reset();
                    viewAlert(data.type, data.message);
                    return true;
                })
                .catch(error => {
                    viewAlert("error", error.message);
                })
        })
    }
}

/**
 * funcion que muestra las tareas
 */
function getTasks() {
    const url = "http://localhost/app-task/Api/getTasks.php";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la solicitud " + response.status);
            }
            return response.json();
        })
        .then(response => {
            if (!response.status) {
                viewAlert(response.type, response.message);
                return false;
            }
            let listTasks = document.querySelector("#task-list");
            let arrDataTask = response.data;
            let itemTasks = "";
            arrDataTask.forEach(item => {
                itemTasks += `
                  <li>
                <div class="task-info">
                    <span class="task-title">${item.titulo}</span>
                    <span class="task-description">${item.descripcion}</span>
                    <span class="task-date">${item.fecha}</span>
                    <span class="task-time">${item.hora}</span>
                </div>
                <div class="task-check">
                    <input type="checkbox" name="task-done" class="task-done" data-id="${item.id}" ${(item.estado == "hecha") ? "checked" : ""}>
                    <label for="task-done">${item.estado}</label>
                </div>
            </li>
                `;
            });
            listTasks.innerHTML = itemTasks;
        })
        .catch(error => {
            viewAlert("error", error.message);
        })

}


function changeStatusTask() {
    if (!document.querySelector(".task-done")) {
        viewAlert("error", "No hay tareas registradas");
        return false;
    }
    const taskDone = document.querySelectorAll(".task-done");
    taskDone.forEach((element) => {
        element.addEventListener('change', (e) => {
            const idTask = element.getAttribute('data-id');
            let estado;
            if (element.checked) {
                estado = "hecha";
                msg = "Tarea hecha";
                tipo = "success";
            } else {
                estado = "pendiente";
                msg = "Tarea pendiente";
                tipo = "error";
            }
            let data = new FormData();
            data.append("id", idTask);
            data.append("estado", estado);
            let encabezados = new Headers();
            let config = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: encabezados,
                body: data
            }
            const url = "http://localhost/app-task/Api/updateStatusTask.php";
            fetch(url, config)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud " + response.status);
                    }
                    return response.json();
                })
                .then((result) => {
                    if (!result.status) {
                        viewAlert(result.type, result.message);
                        return false;
                    }
                    getTasks();
                    viewAlert(tipo, msg);
                    setTimeout(() => {
                        changeStatusTask();
                    }, 500);
                })
                .catch((error) => {
                    viewAlert("error", error.message);
                })

        });
    });
}