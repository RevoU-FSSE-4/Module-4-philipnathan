export const loginFetch = async (email: string, password: string) => {
    const url: string = "https://library-crud-sample.vercel.app/api/user/login";

    try {
        const body = {
            email: email,
            password: password,
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

        const response = await fetch(url, options);
        const data = await response.json();
        const token = JSON.stringify(data.token);
        localStorage.setItem("token", JSON.parse(token));

        if (!response.ok) {
            throw new Error("Error");
        }
    } catch (error) {
        alert(error);
    }
};
