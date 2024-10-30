const URL = "http://localhost:3000/api/v1/appadel";

export const API = async ({ endpoint, method, body, isJSON, token }) => {
    const headers = { Authorization: `Bearer ${token}` };

    isJSON ? (headers["Content-Type"] = "application/json") : null;

    const res = await fetch(URL + endpoint, {
        body: isJSON ? JSON.stringify(body) : body,
        method,
        headers
    });

    const response = await res.json();

    return response;
};

// minuto 1:13:00

/*
export const api = async ({ body, endpoint, method = "GET", isJSON = true, token = null, url }) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };

    isJSON ? (headers["Content-Type"] = "application/json") : null;

    const urlFetch = url ? url : `http://localhost:3000/api/v1/${endpoint}`;

    const res = await fetch(urlFetch, {
        body: isJSON ? JSON.stringify(body) : body,
        method,
        headers
    });
    console.log(res);

    const response = await res.json();
    console.log(response);
    return response;
};
*/
