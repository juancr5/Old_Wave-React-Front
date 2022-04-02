import axios from "axios";

const apiUrlSecond = 'http://ec2-3-84-235-83.compute-1.amazonaws.com/api'
const apiURLSpring = 'https://oldwave-spring-api.herokuapp.com/api/swagger-ui.html#'
/** F por Cors los de Spring */

//http://20.228.205.221/api/product/?page=1&size=50
export const getProductsByName = async (name, page) => {
    //const resp = await axios.get(`${apiUrlSecond}/product/?name=${name}&page=${page}&size=20`);
    const resp = await axios.get(`${apiURLSpring}/product/?name=${name}&page=${page}&size=20/`)
    return resp;
}

//http://20.228.205.221/api/product/{id}/detail/
export const getProductDesc = async (id) => {
    const resp = await axios.get(`${apiUrlSecond}/product/${id}/detail`);
    return resp;
}
