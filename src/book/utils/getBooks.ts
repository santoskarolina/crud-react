import { ResponseModel } from './../../models/response.mode';
import axios from "axios";

export const getBooks = async () => {
    let response: ResponseModel | any = null
    await axios
    .get(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books`)
    .then((json) => {
        response = {data: json.data, status: json.status }
    });

    return response
}