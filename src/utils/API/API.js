export const URL = "https://setpadel-backend.vercel.app/api/v1/setpadel";
// export const URL = "http://localhost:3000/api/v1/setpadel";

export const API = async ({ endpoint, method, body, isJSON = true, token }) => {
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
