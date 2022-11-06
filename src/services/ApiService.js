import axios from 'axios';

const BASE_API = `https://dummyjson.com/`;
const QUERY_API = 'products/';

const ExecuteQuery = (query) => {
    return axios.get(BASE_API + QUERY_API);
}

export default ExecuteQuery;