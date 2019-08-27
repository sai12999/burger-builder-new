import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://react-db-9d268.firebaseio.com'
})

export default instance