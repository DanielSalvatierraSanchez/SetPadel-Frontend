export const URL = "http://localhost:3000/api/v1/appadel";

export const API = async ({ endpoint, method, body, isJSON = true, token }) => {
    console.log(isJSON);
    console.log(body);
    console.log(token);

    const headers = { Authorization: `Bearer ${token}` };

    isJSON ? (headers["Content-Type"] = "application/json") : null;

    const res = await fetch(URL + endpoint, {
        body: isJSON ? JSON.stringify(body) : body,
        method,
        headers
    });
    console.log(res);

    await new Promise((resolve) => setTimeout(resolve, 3000)); //todo ELIMINAR ESTA LINEA ANTES DE FINALIZAR EL PROYECTO

    const response = await res.json();
    if (response.status === 400 || response.status === 401) {
        const form = document.querySelector("form");
        if (form) {
            let removeError = form.querySelector(".error-message");
            if (removeError) {
                removeError.remove();
            }

            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.textContent = response.message;
            form.append(errorMessage);
            return;
        }
    } else {
        return response;
    }
};
