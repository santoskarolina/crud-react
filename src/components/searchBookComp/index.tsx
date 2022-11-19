import "./style.css";
import * as React from "react";
import { useState } from "react";
import { serachBook } from "book/services/book.service";
import { useDispatch} from "react-redux";
import { getBooksSucess, loadBookRequest, loadBookRequestError} from "store/actions";
import { Dispatch } from "redux";
import { useEffect } from "react";

class KeyCode {
    public static readonly ENTER = "Enter";
}

export const SearchBook = () => {
    const [nameFilter, setNameFilter] = useState('')
    const [name, setName] = useState('')
    const dispatch: Dispatch<any> = useDispatch()
    
    useEffect(() => {
        function getPosts() {
                dispatch(loadBookRequest());
                return serachBook(nameFilter)
                    .then(response => {
                        dispatch(getBooksSucess(response.data))
                    }).catch(() => {
                        dispatch(loadBookRequestError())
                    })
            }
        getPosts()
    }, [dispatch, nameFilter])

    const handleClear = () => {
        setName('')
        setNameFilter('')
    }

    const handleSearch = () => {
        if(name !== '') {
            setNameFilter(name)}
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === KeyCode.ENTER && name !== '') setNameFilter(name)
    }

    return (
        <div className="search__book__content">
            <input onKeyDown={handleKeyDown} placeholder="Search book..." value={name}
                onChange={e => setName(e.target.value)} />
            <div className="search__book__actions">
                {name && (<p onClick={handleClear} className="search__book__clear__search">X</p>)}
                <img onClick={handleSearch} src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" alt="Search book" />
            </div>
        </div>
    )
}