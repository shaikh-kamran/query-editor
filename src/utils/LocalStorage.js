const QUERY_LIST = "querylist";
const QUERY = "query";

const getQuerylistInLocal = () => {
    return localStorage.getItem(QUERY_LIST) ? JSON.parse(localStorage.getItem(QUERY_LIST)) : [];
}

const setQuerylistInLocal = (list) => {
    localStorage.setItem(QUERY_LIST, JSON.stringify(list));
}

const getQueryInLocal = () => {
    return localStorage.getItem(QUERY);
}

const setQueryInLocal = (query) => {
    localStorage.setItem(QUERY, query);
}

module.exports = {
    getQuerylistInLocal,
    setQuerylistInLocal,
    getQueryInLocal,
    setQueryInLocal
}