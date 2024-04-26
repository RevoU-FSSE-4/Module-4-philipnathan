export const getAllCategory = async () => {
    const url: string = "https://library-crud-sample.vercel.app/api/category";
    const token = localStorage.getItem("token");

    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        const result = JSON.parse(JSON.stringify(data));

        if (!response.ok) {
            throw new Error("Error");
        }

        return result;
    } catch (error) {
        console.log("Something Error in getAllCategory");
    }
};
