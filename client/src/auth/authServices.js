const BASE_URL = process.env.REACT_APP_API_URL + "/api/v1";

export const login = async (userData) => {


    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const res = await response.json();
    return res;
};


export const register = async (userData) => {

    console.log(BASE_URL);
    const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const res = await response.json();
    return res;
};
