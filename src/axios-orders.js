import axios from "axios";
const instance = axios.create(
    {
        baseURL: 'https://burger-96154-default-rtdb.asia-southeast1.firebasedatabase.app/'
    }
)
export default instance;