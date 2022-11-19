import axios from "axios";
import { BookModel } from "../../models/book.model";
import { Environments } from 'environments/environments';

export const createBook = async (book: BookModel) => {
    let response = await axios.post(Environments.BASE_URL, book)
    return response
}

export const deleteBook = async (id: number) => {
    let response = await axios.delete(`${Environments.BASE_URL}/${id}`)
    return response
}

export const getBooks = async () => {
    let response = await axios.get(Environments.BASE_URL)
    return response
}

export const serachBook = async (name: string) => {
    let response = await axios.get(`${Environments.BASE_URL}`, {params: {Book: name}})
    return response
}

export const getBookById = async (id: number) => {
    let response = await axios.get(`${Environments.BASE_URL}/${id}`)
    return response
}

export const updateBook = async (id: number, book: BookModel) => {
    let response = await axios.put(`${Environments.BASE_URL}/${id}`, book)
    return response
}