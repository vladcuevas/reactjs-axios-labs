import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

export default class DeleteData {
    fetchData = async (url) => {
        try {
            const { data: response } = await
                trackPromise(axios.delete(
                    url,
                    {
                        auth: {
                            username: 'admin',
                            password: 'admin'
                        }
                    }
                )
                )
                return response
        } catch (error) {
            console.error(error)
            return error
        }
    }
}