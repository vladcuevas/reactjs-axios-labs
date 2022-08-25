// use-fetch-data.js
import { useEffect, useState } from 'react'
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await
                    trackPromise(axios.get(
                        url,
                        {
                            auth: {
                                username: 'admin',
                                password: 'admin'
                            }
                        }
                    )
                    )

                setData(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }
        setTimeout(() => {
            fetchData()
        } ,0)

    }, [url])

    return {
        data,
        loading,
    }
}

export default useFetchData
