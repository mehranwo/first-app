import axios from "axios";

export async function login(data) {
    const result = await axios.post('https://629e68698b939d3dc2816128.mockapi.io/student/user',
        JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        }
    });
    return result.data;
}