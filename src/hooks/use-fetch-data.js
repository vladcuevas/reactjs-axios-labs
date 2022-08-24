// use-fetch-data.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(
                    url,
                    {
                        auth: {
                            username: 'admin',
                            password: 'admin'
                        }
                    }
                )

                setData(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
    };
};

export default useFetchData;
