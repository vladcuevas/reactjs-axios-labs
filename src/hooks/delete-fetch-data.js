import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'
import {React, useState} from 'react'

export default class DeleteData {
    fetchData = async (url) => {
        const [loading, setLoading] = useState(true)
        let deleted = 0
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
                deleted = 1
                alert('Record deleted')
                return response, deleted
        } catch (error) {
            console.error(error)
            return error
        }
        finally {
            setLoading(false)
        }
    }
}