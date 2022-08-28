import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

export default class PutFetchData {
    fetchData = async (url, data_raw) => {
        console.log(data_raw)
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
                return response 
            // setData(response)
            // setState({ updatedAt: response.data.updatedAt })
        } catch (error) {
            // setState({ errorMessage: error.message });
            console.error(error)
            return error
        }
    }
}
