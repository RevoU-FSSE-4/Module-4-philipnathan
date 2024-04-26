export const postNewData = async (
    category_name: string,
    category_description: string
) => {
    const url: string =
        "https://library-crud-sample.vercel.app/api/category/create";
    const token = localStorage.getItem("token");

    try {
        const body = {
            category_name: category_name,
            category_description: category_description,
            is_active: true,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(body),
        };

        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
            throw new Error("Error");
        }
    } catch (error) {
        console.log("Something Error in postNewData");
    }
};
