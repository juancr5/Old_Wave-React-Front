import axios from "axios";

const apiUrlSpring = 'https://oldwave-spring-api.herokuapp.com/api'

//http://20.228.205.221/api/product/?page=1&size=50
<<<<<<< HEAD
export const getProductsByNameS = async (name, page) => {
=======
export const getProductsByName = async (name, page) => {
>>>>>>> 81328483dc7f2e58aaa00a3eaddf13931b1143c7
    const resp = await axios.get(`${apiUrlSpring}/product?name=${name}&page=${page}&size=20`);
    return resp;
}

//http://20.228.205.221/api/product/{id}/detail/
<<<<<<< HEAD
export const getProductDescS = async (code) => {
=======
export const getProductDesc = async (code) => {
>>>>>>> 81328483dc7f2e58aaa00a3eaddf13931b1143c7
    const resp = await axios.get(`${apiUrlSpring}/product/${code}/detail`);
    return resp;
}


