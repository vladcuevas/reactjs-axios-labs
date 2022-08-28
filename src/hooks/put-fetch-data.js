import { useEffect, useState, setState } from 'react'
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

const PutFetchData = (url, data_raw) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await
                    trackPromise(axios.put(
                        url, data_raw,
                        {
                            auth: {
                                username: 'admin',
                                password: 'admin'
                            }
                        }
                    )
                    )
                
                setData(response)
                setState({ updatedAt: response.data.updatedAt })
            } catch (error) {
                setState({ errorMessage: error.message });
                console.error(error)
            }
            setLoading(false)
        }
        setTimeout(() => {
            fetchData()
        }, 0)

    }, [url, data_raw])

    return {
        data,
        loading,
    }
}

export default PutFetchData
