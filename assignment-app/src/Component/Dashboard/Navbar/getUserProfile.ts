export const getUserProfile = async () => {
    const token = localStorage.getItem("token");
    const url: string =
        "https://library-crud-sample.vercel.app/api/user/profile";

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
        const userProfile = JSON.parse(JSON.stringify(data));

        if (!response.ok) {
            throw new Error("Error");
        }

        return userProfile;
    } catch (error) {
        console.log("Something Error in getUserProfile");
    }
};
