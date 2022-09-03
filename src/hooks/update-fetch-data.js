import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

export default class PutFetchData {
    fetchData = async (url, axiosMethod, dataRaw, reload=false) => {
        console.log(dataRaw)
        try {
            const { data, status, headers, config, request  } = await
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
            return {data, status, headers, config, request}
        } catch (error) {
            console.error(error)
            return error
        }
        finally {
            this.loading = false
        }
    }
}