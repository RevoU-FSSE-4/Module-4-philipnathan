export const editCategory = async (param: any, event: any) => {
    const url = "https://library-crud-sample.vercel.app/api/category/update";
    const token = localStorage.getItem("token");
    const id: string = param.id;
    const is_active: boolean = true;
    let category_name: string = "";
    let category_description: string = "";

    const changedFieldChecker = (param: any, event: any) => {
        if (param.field === "category_name") {
            category_name = event.target.value;
            category_description = param.row.category_description;
        } else if (param.field === "category_description") {
            category_name = param.row.category_name;
            category_description = event.target.value;
        }
    };

    changedFieldChecker(param, event);

    try {
        const body = {
            id: id,
            category_name: category_name,
            category_description: category_description,
            is_active: is_active,
        };
        const options = {
            method: "PUT",
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
        console.log("Something error in editCategory");
    }
};
