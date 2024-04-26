export const registerFetch = async (
    name: string,
    email: string,
    password: string
) => {
    const url: string =
        "https://library-crud-sample.vercel.app/api/user/register";
    try {
        const body = {
            name: name,
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

        if (!response.ok) {
            throw new Error("Error");
        }

        return true;
    } catch (error) {
        console.log("Something error in registerFetch");
    }
};
