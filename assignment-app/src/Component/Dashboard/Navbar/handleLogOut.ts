export const handleLogOut = async () => {
    const url: string =
        "https://library-crud-sample.vercel.app/api/user/logout";
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
        localStorage.removeItem("token");

        if (!response.ok) {
            throw new Error("Error");
        }
    } catch (error) {
        console.log("Something Error in handleLogOut");
    }
};
