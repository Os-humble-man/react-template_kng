import axios from "axios";
import { useState } from "react";

const useFetch = () => {
    const [loading, setLoading] = useState(false);

    async function fetchData(type, destination, data = null, head = sessionStorage.getItem('accessToken')) {
        // Set the global headers
        axios.defaults.headers = {
            Authorization: `Bearer ${head}`,
        };
        setLoading(true);
        try {
            const response = await axios({
                method: type,
                url: `http://localhost:5500/api/${destination}`,
                data,
            });
            setLoading(false);
            if (response.data.newAccessToken)
                localStorage.setItem('access', response.data.newAccessToken)
            return response;
        } catch (error) {
            setLoading(false);
            return error;
        }
    }

    return {
        fetchData,
        loading,
    };
};

export { useFetch };
