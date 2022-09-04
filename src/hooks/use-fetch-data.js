// use-fetch-data.js
import { useEffect, useState } from 'react'
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

const useFetchData = (url, axiosMethod='GET', dataRaw={}, reload) => {
    console.log("fetching data")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(`fetching data (useEffect) ${reload}`)
        const fetchData = async () => {
            try {
                const { data: response } = await
                    trackPromise(axios(
                        {
                            method: axiosMethod,
                            url: url,
                            auth: {
                                username: 'admin',
                                password: 'admin'
                            },
                            data: dataRaw
                        }
                    )
                    )
                setData(response);
            } catch (error) {
                console.error(error)
            }
            finally {
                setLoading(false)
            }
        }
        setTimeout(() => {
            fetchData()
        } ,0)

    }, [url, reload])

    return {
        data,
        loading,
    }
}

export default useFetchData
