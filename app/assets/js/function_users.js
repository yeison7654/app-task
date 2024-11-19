let loadingScreen = document.querySelector('.loading-screen');
document.addEventListener("DOMContentLoaded", function () {
    //Mostrar el modal de registro de tareas
    setTimeout(() => {
        saveUser();
        loadingScreen.classList.add("hidden");
    }, 1000);
});

function saveUser() {
    if (document.querySelector("#formSave")) {
        const saveForm = document.querySelector("#formSave");
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
            const url = "http://localhost/app-task/Api/createUser.php";
            fetch(url, config)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud " + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                })
        })
    }
}