import "./style.css";
import * as React from "react";
import { useState } from "react";
import { serachBook } from "book/services/book.service";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getBooksSucess, loadBookRequest, loadBookRequestError, loadSetSearchBook } from "store/actions";
import { AplicationState } from "store/types";
import { Dispatch } from "redux";
import { useEffect } from "react";

class KeyCode {
    public static readonly ENTER = "Enter";
}

export const SearchBook = () => {
    const [name, setName] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const filter = useSelector((state: AplicationState) => state.filter, shallowEqual);
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        async function getPosts() {
                dispatch(loadBookRequest());
                dispatch(loadSetSearchBook(nameFilter))
                return await serachBook(nameFilter)
                    .then(response => {
                        dispatch(getBooksSucess(response.data))
                    }).catch(() => {
                        dispatch(loadBookRequestError())
                    })
            }
        getPosts()
    }, [dispatch, filter, nameFilter])

    const handleClear = () => {
        setName('')
        setNameFilter('')
    }

    const handleSearch = () => {
        if(name !== '') setNameFilter(name)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === KeyCode.ENTER) handleSearch()
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