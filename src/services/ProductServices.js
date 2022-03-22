import axios from "axios";

const apiUrlSite = 'http://20.228.205.221/api'

export const getProductsByName = async (name, page) => {
    const resp = await axios.get(`${apiUrlSite}/product/?name=${name}&page=${page}&size=20`);
    return resp;
}

// export const getProductByID = async (id) => {
//     const resp = await axios.get(`${apiUrlItems}${id}`);
//     return resp;
// }

export const getProductDesc = async (id) => {
    const resp = await axios.get(`${apiUrlSite}/product/${id}/detail`);
    return resp;
}