// use-fetch-data.js
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

export default class Requests {
    fetchData = async (
        url, axiosMethod = 'GET', dataRaw = {}, credentials = {}
    ) => {
        try {

            // Add a response interceptor
            axios.interceptors.response.use(function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                console.log('logged')
                return response;
            }, function (error) {
                console.log(`ERROR: ${error}`)
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                return error;
            });

            const { data, status, headers, config, request } = await
                trackPromise(axios(
                    {
                        method: axiosMethod,
                        url: url,
                        auth: credentials,
                        data: dataRaw
                    }
                )
                );

            return { data, status, headers, config, request }

        } catch (error) {
            console.error(`|||ERROR There was an error while requesting ${error}`)
        }
    }
}