// use-fetch-data.js
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

export default class Requests {
    fetchData = async (url, axiosMethod='GET', dataRaw={}, reload=false) => {
        try {
            const { data, status, headers, config, request } = await
                trackPromise(axios(
                    url,
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
            const loading = false
            return {data, status, headers, config, request, loading}
        } catch (error) {
            console.error(error)
        }
    }
}