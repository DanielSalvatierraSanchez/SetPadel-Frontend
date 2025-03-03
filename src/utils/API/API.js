export const URL = "https://setpadelbackend.vercel.app/api/v1/setpadel";
// export const URL = "http://localhost:3000/api/v1/setpadel";

export const API = async ({ endpoint, method, body, isJSON = true, token }) => {
    const headers = { Authorization: `Bearer ${token}` };
    isJSON ? (headers["Content-Type"] = "application/json") : null;
    const res = await fetch(URL + endpoint, {
        body: isJSON ? JSON.stringify(body) : body,
        method,
        headers
    });
    console.log("1️⃣ * res de API desde el front =>", res);
    const response = await res.json();
    console.log("2️⃣ * response de API desde el front =>", response);
    return response;
};
