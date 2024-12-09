export const URL = "http://localhost:3000/api/v1/appadel";

export const API = async ({ endpoint, method, body, isJSON = true, token }) => {
    const headers = { Authorization: `Bearer ${token}` };
    isJSON ? (headers["Content-Type"] = "application/json") : null;
    const res = await fetch(URL + endpoint, {
        body: isJSON ? JSON.stringify(body) : body,
        method,
        headers
    });
    console.log("res API =>", res);
    // await new Promise((resolve) => setTimeout(resolve, 3000)); //todo ELIMINAR ESTA LINEA ANTES DE FINALIZAR EL PROYECTO
    const response = await res.json();
    console.log("response API =>", response);
    return response;
};
