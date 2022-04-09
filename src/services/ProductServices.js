import axios from "axios";

const apiUrlSecond = 'https://oldwave-fastapi-backend.herokuapp.com/api'

//http://20.228.205.221/api/product/?page=1&size=50
export const getProductsByName = async (name, page) => {
    const resp = await axios.get(`${apiUrlSecond}/product/?name=${name}&page=${page}&size=20`);
    //const resp = await axios.get(`${apiURLSpring}/product/?name=${name}&page=${page}&size=20/`)
    return resp;
}

//http://20.228.205.221/api/product/{id}/detail/
export const getProductDesc = async (id) => {
    const resp = await axios.get(`${apiUrlSecond}/product/${id}/detail`);
    return resp;
}
