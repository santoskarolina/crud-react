import { ResponseModel } from './../../models/response.mode';
import { BookModel } from "../../models/book.model";
import axios from "axios";

export const deleteBook = async (id: number) => {
    let response: ResponseModel | any = null
    await axios
    .delete(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books/${id}`)
    .then((json) => {
        response = {data: json.data, status: json.status }
    });

    return response
}