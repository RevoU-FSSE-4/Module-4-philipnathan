export const deleteButtonFunction = async (id: string) => {
    const url: string = `https://library-crud-sample.vercel.app/api/category/${id}`;
    const token = localStorage.getItem("token");

    try {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        const result = JSON.parse(JSON.stringify(data));
        console.log(result);

        if (!response.ok) {
            throw new Error("Error");
        }
    } catch (error) {
        console.log("Something Error in deleteButtonFunction");
    }
};
